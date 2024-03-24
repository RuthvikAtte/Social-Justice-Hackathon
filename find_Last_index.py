import polars as pl
import pandas as pd
import json
import numpy as np
from numba import njit


df = pd.read_csv("US_AQI.csv")
# print(df.head())
df = df[["Date", "lat", "lng", "AQI"]]

value = "2019-12-31"

# Convert DataFrame column to NumPy array for faster processing
array = df["Date"].values

# Find the   last index of the value in the NumPy array directly
last_index = np.where(array == value)[0][-1]

print("Last instance of", value, "is at index:", last_index)

# df_dict = df.to_dicts()
# json_str = json.dumps(df_dict)
# with open("output.json", "w") as f:
#     f.write(json_str)


# print(data)
# json_data = data.write_json()
# print(json_data)
# with open("Air_Pollution_Data.json", "w") as json_file:
#     json_file.write(json_data)
