import polars as pl
import pandas as pd
import geopandas as gpd
from shapely.geometry import Point

df = pd.read_csv("US_AQI.csv")
df = df[["Date", "lat", "lng", "AQI"]]


# Index to split the DataFrame
split_indices = [25831, 192464, 359316, 526808]


# Splitting the DataFrame
# dfs = [
#     df.iloc[split_indices[i] : split_indices[i + 1]]
#     for i in range(len(split_indices) - 1)
# ]


# Print the split DataFrames
list_df = []
mins = []
maxs = []
# for i, split_df in enumerate(dfs, 1):
#     json_data = split_df.to_json(orient="records", indent=4)
#     # print(json_data)
#     print("MIN VALUES")
#     print(split_df.min())
#     print("MAX VALUES")
#     print(split_df.max())
#     # Convert DataFrame to GeoDataFrame

split_df = df.iloc[:25831].to_json(orient="records", indent=4)
gdf = gpd.GeoDataFrame(
    split_df,
    geometry=gpd.points_from_xy(split_df["lng"], split_df["lat"]),
)

# Select relevant columns
gdf = gdf[["Date", "geometry", "AQI"]]

# Convert GeoDataFrame to GeoJSON
geojson = gdf.to_json()
name = "output" + str(i)
# Write GeoJSON to a file
with open(name + ".geojson", "w") as file:
    file.write(geojson)
