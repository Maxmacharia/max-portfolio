import cyclone_aflred from "../assets/projects/cyclone_aflred.png";
import co_Queensland from "../assets/projects/co_Queensland.png";
import wildebeest_stats from "../assets/projects/wildebeest_stats.png";
import Rwanda_Land_cover_2020_25 from "../assets/projects/Rwanda_Land_cover_2020_25.png";
import ungwana_beach from "../assets/projects/ungwana_beach.png";
import unet_Segmentation from "../assets/projects/unet_Segmentation.png";
import marereni_image from "../assets/projects/marereni_image.png";
import kenya_agriculture from "../assets/projects/kenya_agriculture.png";

export const projects = [
  {
    id: 1,
    title: "Cyclone Threshold for Cyclone Analysis",
    shortDesc: "Flood mapping for Cyclone Alfred using Sentinel-1 SAR and population data.",
    image: cyclone_aflred,
    details: {
      objective: `Map and quantify flood extent from Cyclone Alfred (Queensland & Northern NSW), identify newly flooded areas and estimate affected population using Sentinel-1 SAR and WorldPop.`,
      data: `Sentinel-1 (COPERNICUS/S1_GRD), WorldPop population (100m), AOI (Local Government Areas).`,
      methods: `Median compositing, Otsu automatic thresholding on VV backscatter for water detection, raster math to identify newly flooded pixels, area and population aggregation.`,
      tools: `Google Earth Engine (JavaScript), ui.Chart, Export to Drive`,
      visualization: `Water extent (before/during/after), flood extent, population overlay`,
      link: "https://code.earthengine.google.com/7864f62b8147890172434ad5839e4d43"
    }
  },
  {
    id: 2,
    title: "Queensland Fire Prediction & Atmospheric Pollution",
    shortDesc: "Predict NBR (fire severity) and correlate with CO emissions; multi-year trend analysis (2020–2025).",
    image: co_Queensland,
    details: {
      objective: `Short-term NBR prediction (Sep-Nov 2023) using NDVI, Temp, Wind, Elevation; correlation with Sentinel-5P CO; long-term yearly trends 2020–2025.`,
      data: `Sentinel-2, ERA5-Land, SRTM, Sentinel-5P, user sample points.`,
      methods: `Median compositing, cloud masking, linear regression (ee.Reducer.linearRegression), Pearson correlation, time-series aggregation.`,
      tools: `Google Earth Engine, ee.Reducer.linearRegression, ui.Chart`,
      visualization: `Predicted vs Observed NBR maps, scatter plots with CO, yearly trend charts`,
      link: null
    }
  },
  {
    id: 3,
    title: "Wildebeest Population & Environmental Correlates",
    shortDesc: "Correlation and time-series analysis linking wildebeest populations to environmental variables across sample years.",
    image: wildebeest_stats,
    details: {
      objective: `Explore relationships between wildebeest population and NDVI, NPP, precipitation, proximity to rivers, elevation, and population using row-level and yearly-averaged correlation analyses.`,
      data: `Combined CSV exports from zonal stats (years: 2000,2004,2008,2010,2013,2018,2021) stored on Google Drive.`,
      methods: `Data concatenation, yearly averaging, Pearson correlation matrices, heatmaps, and time-series faceted line charts.`,
      tools: `Pandas, Matplotlib, Seaborn, Google Colab`,
      visualization: `Correlation heatmaps, multi-line time-series charts`,
      link: "https://drive.google.com/drive/folders/1HZlvXhES3LuW4Frj8jGCPP-tUMyELV4e"
    }
  },
  {
    id: 4,
    title: "Rwanda Land Cover Classification (2000–2025)",
    shortDesc: "Multi-temporal LULC mapping for Rwanda using Landsat 7 and Sentinel-2 with Random Forest classification.",
    image: Rwanda_Land_cover_2020_25,
    details: {
      objective: `Create LULC maps for Rwanda for 2000, 2010, 2020, and 2025 using a consistent Random Forest workflow to enable change analysis.`,
      data: `Landsat 7 ETM+, Sentinel-2, training feature collections, AOI (Rwanda VCRP).`,
      methods: `Spectral index engineering, Random Forest (500 trees), accuracy assessment (confusion matrix), focal mode filtering, multi-epoch processing.`,
      tools: `Google Earth Engine, ee.Classifier.smileRandomForest, Export to Drive`,
      visualization: `Epoch LULC maps, accuracy reports`,
      link: {
        "2000": "https://code.earthengine.google.com/91595b5de5d4264349bf68c9dbfd5829",
        "2010": "https://code.earthengine.google.com/55bbb909dfb7eefeaae1d299ceef7386",
        "2020": "https://code.earthengine.google.com/44538a97f40df24e108b00f97843f99d",
        "2025": "https://code.earthengine.google.com/b0c258bf3d372c99bc98a32fbc258059"
      }
    }
  },
  {
    id: 5,
    title: "Ugwana Land Cover Classification (Mangrove Monitoring)",
    shortDesc: "Multi-epoch mangrove / bareland / water classification with NDTI-based turbidity assessment.",
    image: ungwana_beach,
    details: {
      objective: `Map Mangrove, Bareland, and Water across 2007, 2012, 2017, 2022, 2025 using Landsat 7 and Sentinel-2; compute NDTI for water turbidity.`,
      data: `Landsat 7 SR bands, Sentinel-2 bands, training feature collections, ROI.`,
      methods: `Cloud filtering, median compositing, spectral indices (NDVI, NDMI, MNDWI, BSI, MVI), Random Forest, NDTI masking for water turbidity.`,
      tools: `Google Earth Engine, Export.image.toDrive`,
      visualization: `Classified maps, turbidity rasters, change maps`,
      link: {
        "2007": "https://code.earthengine.google.com/a6c04d76a64f1022220a10266f1eb05c",
        "2012": "https://code.earthengine.google.com/60fed5efba2574f319c3141396e9332f",
        "2017": "https://code.earthengine.google.com/95ffbaf130ef95ab89bfd2a3d652236d",
        "2022": "https://code.earthengine.google.com/610c98a5934703fe07e5ec8bbbdc30df",
        "2025": "https://code.earthengine.google.com/aa1f7abea037652b2f09c2cc7fc4402a"
      }
    }
  },
  {
    id: 6,
    title: "Tree Species Detection using U-Net",
    shortDesc: "Deep-learning based semantic segmentation of UAV imagery to detect tree species using a U-Net model.",
    image: unet_Segmentation,
    details: {
      objective: `Train a U-Net model to segment an arboretum orthomosaic into six classes using Label-Studio masks, patch-wise training, Dice+CrossEntropy loss, and full-image inference.`,
      data: `High-resolution drone RGB orthomosaic; Label-Studio labeled mask; hyperparameters for patching and training.`,
      methods: `Patch extraction, custom PyTorch U-Net, Dice+CrossEntropy loss, mixed-precision training, LR scheduling, early stopping, patch-based inference and stitching.`,
      tools: `PyTorch, OpenCV, NumPy, Matplotlib, Google Colab`,
      visualization: `Stitched classified map (PNG) and label TIFF`,
      link: "https://drive.google.com/drive/folders/1QxOCC3R4p9X5tCrmO4gSM2eisNMjTxSr?usp=sharing"
    }
  },
  {
    id: 7,
    title: "Marereni OBIA Land Cover Classification",
    shortDesc: "Object-Based Image Analysis (SLIC + Random Forest) for multi-epoch land cover mapping in Marereni.",
    image: marereni_image,
    details: {
      objective: `Perform OBIA (SLIC superpixels) and segment-level Random Forest classification for Marereni across 2000,2005,2010,2015,2020,2025.`,
      data: `Landsat 7 and Sentinel-2 rasters, truth shapefiles (polygons) per epoch.`,
      methods: `Rescale bands, SLIC segmentation (~50k segments), compute segment statistics (mean,min,max,var,skew,kurtosis,area), Random Forest on segment features, accuracy assessment.`,
      tools: `GDAL, scikit-image, GeoPandas, Scikit-learn`,
      visualization: `Segment maps, LULC maps per epoch, accuracy reports`,
      link: null
    }
  },
  {
    id: 8,
    title: "KilimoSTAT — Geospatial DSS for Agriculture (Ongoing)",
    shortDesc: "Geospatial decision support system for Kenya's KilimoSTAT portal integrating national datasets and ML predictions.",
    image: kenya_agriculture,
    details: {
      objective: `Upgrade KilimoSTAT to a geospatial DSS with predictive analytics, spatial visualization, and multi-agency data integration.`,
      data: `Multi-source national datasets (MoALD, DVS, KNBS, KALRO, FAO, CBK, etc.).`,
      methods: `ETL pipelines, PostGIS storage, Random Forest & time-series models, zonal statistics, interactive dashboards.`,
      tools: `PostgreSQL/PostGIS, Google Earth Engine, React/Tailwind, scikit-learn, FastAPI`,
      visualization: `Interactive maps, predictive dashboards, county-level reports`,
      link: null
    }
  }
]
