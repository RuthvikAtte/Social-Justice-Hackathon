import geopandas as gpd
import folium
from folium.plugins import HeatMap

# Load GeoJSON data
gdf = gpd.read_file("output1.geojson")


# Create a map centered at a location
m = folium.Map(location=[40.7128, -74.0060], zoom_start=10)

# Convert GeoDataFrame to a list of points
heat_data = [[point.xy[1][0], point.xy[0][0]] for point in gdf.geometry]

# Add heatmap layer
HeatMap(heat_data).add_to(m)

# Save the map
m.save("heatmap.html")
