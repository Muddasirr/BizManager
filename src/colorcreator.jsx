import React, { useRef, useState } from 'react';
import { Button, TextField, Typography, Box,
  Container, Dialog, DialogActions, DialogContent, DialogTitle,
  Grid
 } from '@mui/material';
 import axios from 'axios';
 import { GetColorName } from 'hex-color-to-color-name';
 
const ColorPaletteBuilder = () => {
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  const [PaletteContainer, setPaletteContainer] = useState('')
  const [formData, setFormData] = useState({

   Name: '',
    Type: '',
    Generic: '',
    Color: '',
    Shape: '',
    weight_mg: '',
    width_mm: '',
    height_mm: ''

  });
  const imgFileRef = useRef(null);

  const buildPalette = (colorsList) => {
    const paletteContainer = []
    const complementaryContainer = document.getElementById("complementary");
    paletteContainer.innerHTML = "";
    complementaryContainer.innerHTML = "";

    const orderedByColor = orderByLuminance(colorsList);
    const hslColors = convertRGBtoHSL(orderedByColor);

    for (let i = 0; i < orderedByColor.length; i++) {
      const hexColor = rgbToHex(orderedByColor[i]);
      const hexColorComplementary = hslToHex(hslColors[i]);

      if (i > 0) {
        const difference = calculateColorDifference(
          orderedByColor[i],
          orderedByColor[i - 1]
        );

        if (difference < 120) {
          continue;
        }
      }

      const colorElement = []
      colorElement[i] = hexColor;

      paletteContainer[i] = (colorElement[i]);

      if (i == orderedByColor.length - 1) {
     
        setFormData({
          ...formData,
          Color: paletteContainer[i]
        })

      }




    }
  };

  const rgbToHex = (pixel) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    };

    return (
      "#" +
      componentToHex(pixel.r) +
      componentToHex(pixel.g) +
      componentToHex(pixel.b)
    ).toUpperCase();
  };

  const hslToHex = (hslColor) => {
    const hslColorCopy = { ...hslColor };
    hslColorCopy.l /= 100;
    const a =
      (hslColorCopy.s * Math.min(hslColorCopy.l, 1 - hslColorCopy.l)) / 100;
    const f = (n) => {
      const k = (n + hslColorCopy.h / 30) % 12;
      const color = hslColorCopy.l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
    // Your hslToHex function implementation remains the same
  };

  const convertRGBtoHSL = (rgbValues) => {
    return rgbValues.map((pixel) => {
      let hue,
        saturation,
        luminance = 0;

      // first change range from 0-255 to 0 - 1
      let redOpposite = pixel.r / 255;
      let greenOpposite = pixel.g / 255;
      let blueOpposite = pixel.b / 255;

      const Cmax = Math.max(redOpposite, greenOpposite, blueOpposite);
      const Cmin = Math.min(redOpposite, greenOpposite, blueOpposite);

      const difference = Cmax - Cmin;

      luminance = (Cmax + Cmin) / 2.0;

      if (luminance <= 0.5) {
        saturation = difference / (Cmax + Cmin);
      } else if (luminance >= 0.5) {
        saturation = difference / (2.0 - Cmax - Cmin);
      }

      /**
       * If Red is max, then Hue = (G-B)/(max-min)
       * If Green is max, then Hue = 2.0 + (B-R)/(max-min)
       * If Blue is max, then Hue = 4.0 + (R-G)/(max-min)
       */
      const maxColorValue = Math.max(pixel.r, pixel.g, pixel.b);

      if (maxColorValue === pixel.r) {
        hue = (greenOpposite - blueOpposite) / difference;
      } else if (maxColorValue === pixel.g) {
        hue = 2.0 + (blueOpposite - redOpposite) / difference;
      } else {
        hue = 4.0 + (greenOpposite - blueOpposite) / difference;
      }

      hue = hue * 60; // find the sector of 60 degrees to which the color belongs

      // it should be always a positive angle
      if (hue < 0) {
        hue = hue + 360;
      }

      // When all three of R, G and B are equal, we get a neutral color: white, grey or black.
      if (difference === 0) {
        return false;
      }

      return {
        h: Math.round(hue) + 180, // plus 180 degrees because that is the complementary color
        s: parseFloat(saturation * 100).toFixed(2),
        l: parseFloat(luminance * 100).toFixed(2),
      };
    });
    // Your convertRGBtoHSL function implementation remains the same
  };

  const orderByLuminance = (rgbValues) => {
    const calculateLuminance = (p) => {
      return 0.2126 * p.r + 0.7152 * p.g + 0.0722 * p.b;
    };

    return rgbValues.sort((p1, p2) => {
      return calculateLuminance(p2) - calculateLuminance(p1);
    });
    // Your orderByLuminance function implementation remains the same
  };

  const buildRgb = (imageData) => {
    const rgbValues = [];
    // note that we are loopin every 4!
    // for every Red, Green, Blue and Alpha
    for (let i = 0; i < imageData.length; i += 4) {
      const rgb = {
        r: imageData[i],
        g: imageData[i + 1],
        b: imageData[i + 2],
      };

      rgbValues.push(rgb);
    }

    return rgbValues;
    // Your buildRgb function implementation remains the same
  };

  const calculateColorDifference = (color1, color2) => {
    const rDifference = Math.pow(color2.r - color1.r, 2);
    const gDifference = Math.pow(color2.g - color1.g, 2);
    const bDifference = Math.pow(color2.b - color1.b, 2);

    return rDifference + gDifference + bDifference;
    // Your calculateColorDifference function implementation remains the same
  };

  const findBiggestColorRange = (rgbValues) => {

    let rMin = Number.MAX_VALUE;
    let gMin = Number.MAX_VALUE;
    let bMin = Number.MAX_VALUE;

    let rMax = Number.MIN_VALUE;
    let gMax = Number.MIN_VALUE;
    let bMax = Number.MIN_VALUE;

    rgbValues.forEach((pixel) => {
      rMin = Math.min(rMin, pixel.r);
      gMin = Math.min(gMin, pixel.g);
      bMin = Math.min(bMin, pixel.b);

      rMax = Math.max(rMax, pixel.r);
      gMax = Math.max(gMax, pixel.g);
      bMax = Math.max(bMax, pixel.b);
    });

    const rRange = rMax - rMin;
    const gRange = gMax - gMin;
    const bRange = bMax - bMin;

    // determine which color has the biggest difference
    const biggestRange = Math.max(rRange, gRange, bRange);
    if (biggestRange === rRange) {
      return "r";
    } else if (biggestRange === gRange) {
      return "g";
    } else {
      return "b";
    }
    // Your findBiggestColorRange function implementation remains the same
  };

  const quantization = (rgbValues, depth) => {
    const MAX_DEPTH = 4;

    // Base case
    if (depth === MAX_DEPTH || rgbValues.length === 0) {
      const color = rgbValues.reduce(
        (prev, curr) => {
          prev.r += curr.r;
          prev.g += curr.g;
          prev.b += curr.b;

          return prev;
        },
        {
          r: 0,
          g: 0,
          b: 0,
        }
      );

      color.r = Math.round(color.r / rgbValues.length);
      color.g = Math.round(color.g / rgbValues.length);
      color.b = Math.round(color.b / rgbValues.length);

      return [color];
    }

    /**
     *  Recursively do the following:
     *  1. Find the pixel channel (red,green or blue) with biggest difference/range
     *  2. Order by this channel
     *  3. Divide in half the rgb colors list
     *  4. Repeat process again, until desired depth or base case
     */
    const componentToSortBy = findBiggestColorRange(rgbValues);
    rgbValues.sort((p1, p2) => {
      return p1[componentToSortBy] - p2[componentToSortBy];
    });

    const mid = rgbValues.length / 2;
    return [
      ...quantization(rgbValues.slice(0, mid), depth + 1),
      ...quantization(rgbValues.slice(mid + 1), depth + 1),
    ];
    // Your quantization function implementation remains the same
  };

  const handleImageUpload = (event) => {
    const image = new Image();
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      image.onload = () => {
        const canvas = document.getElementById("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, image.width, image.height);
        const rgbArray = buildRgb(imageData.data);

        const quantColors = quantization(rgbArray, 0);
        buildPalette(quantColors);
      };
      image.src = fileReader.result;
    };
    fileReader.readAsDataURL(file);
  };



  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setOpen(false);
      const color = await GetColorName(formData.Color);
  
      const response = await axios.post('http://localhost:3001/addproducts', {
        product_name: formData.Name,
        type: formData.Type,
        generic: formData.Generic,
        color: color,
        shape: formData.Shape,
        weight_mg: formData.weight_mg,
        width_mm: formData.width_mm,
        height_mm: formData.height_mm
      });
  
      console.log(response.data); // Assuming response contains useful data
      setFormData({
        Name: '',
        Type: '',
        Generic: '',
        Color: '',
        Shape: '',
        weight_mg: '',
        width_mm: '',
        height_mm: ''
      });
    } catch (error) {
      console.error("Error adding product:", error.message);
      // Handle specific error cases
      if (error.response) {
        // Request made and server responded with a status code
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error setting up request:", error.message);
      }
    }
  };

  return (
    <div>
         <Container>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Products
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Products</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1, maxWidth: '400px', mx: 'auto' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Color"
                  name="Color"
                  value={formData.Color}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Type"
                  name="Type"
                  value={formData.Type}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Generic"
                  name="Generic"
                  value={formData.Generic}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Shape"
                  name="Shape"
                  value={formData.Shape}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Weight (mg)"
                  name="weight_mg"
                  type="number"
                  value={formData.weight_mg}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Height (mm)"
                  name="height_mm"
                  type="number"
                  value={formData.height_mm}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Width (mm)"
                  name="width_mm"
                  type="number"
                  value={formData.width_mm}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
          <input type="file" id="imgfile" ref={imgFileRef} onChange={handleImageUpload} />
          <canvas id="canvas" style={{ display: 'none' }}></canvas>
          <div id="palette" style={{ display: 'none' }}></div>
          <div id="complementary" style={{ display: 'none' }}></div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </div>
  );
};

export default ColorPaletteBuilder;
