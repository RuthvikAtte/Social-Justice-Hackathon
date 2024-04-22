from api import API as ap
import pandas as pd
import json


# ap.delete_json(filepath="data.json")

# ap.request_FIPS()
# FIP_numbers = ap.FIPS()
# print(FIP_numbers)
date = 1995


data = pd.DataFrame(columns=["Year", "State", "longitude", "latitude", "PPBValue"])

# print(ap.FIPS())
for y in ap.FIPS():
    count = 0
    ap.get_data_FIBS("Holder", y, date)
    f = open("Holder.json", "r")
    parsedR = json.loads(f.read())
    df = pd.json_normalize(parsedR)
    df = pd.json_normalize(parsedR)
    try:
        rows = df["Header"].values.item(0)[0]["rows"]
        print(y)
        print("rows " + rows)
    except:
        print(y)
        print("Error")
    # for x in range(0, rows):
    #     dict = df["Data"].values.item(0)[x]
    #     list1 = []
    #     list1.append(dict["year"])
    #     list1.append(dict["state"])
    #     list1.append(dict["longitude"])
    #     list1.append(dict["latitude"])
    #     list1.append(dict["arithmetic_mean"])
    #     # print(list1)
    #     data.loc[count] = list1
    #     count = count + 1
    #     # print(dict["latitude"])


# json_data = data.to_json(orient="records", indent=4)
# print(json_data)

# with open("Air_Pollution_Data.json", "w") as json_file:
#     json_file.write(json_data)

# print(dict["longitude"])
# print(dict["arithmetic_mean"])


# print(data.head())
