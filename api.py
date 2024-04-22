# Illustrates an API call to Datafiniti's Product Database for hotels.
import json
import pandas as pd
import requests
import os


class API:

    def __init__(self):
        pass

    def request_FIPS():
        response = requests.get(
            "https://aqs.epa.gov/data/api/list/states?email=test@aqs.api&key=test"
        )
        if response.status_code == 200:
            # Request was successful
            data1 = response.json()
            # Parse and use the data as needed
        else:
            # Request failed
            print(f"Request failed with status code: {response.status_code}")

        data1 = response.json()
        with open("Country_FIPS.json", "w") as f:
            json.dump(data1, f, ensure_ascii=False, indent=4)

    # Getting all of the FIBS Numbers from the Country_FIPS
    def FIPS():
        f = open("Country_FIPS.JSON", "r")
        parsedR = json.loads(f.read())
        FIPS_List = []
        df = pd.json_normalize(parsedR)
        new_df = df["Data"].values
        for x in new_df.item(0):
            FIPS_List.append(x["code"])
        FIPS_List.pop()
        return FIPS_List

    def get_data_FIBS(file_name, num_FIP, Year):

        response = requests.get(
            "https://aqs.epa.gov/data/api/annualData/byState?email=test@aqs.api&key=test&param=45201&bdate=19950515&edate=19950515&state="
            + str(num_FIP)
        )
        if response.status_code == 200:
            # Request was successful
            data = response.json()
            # Parse and use the data as needed
        else:
            # Request failed
            print(f"Request failed with status code: {response.status_code}")

        data = response.json()
        # print(data)
        filename = file_name + ".json"
        with open(filename, "w") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

    def delete_json(filepath):
        if os.path.exists(filepath):
            os.remove(filepath)


api = API()


# Do something with the response.
# if r.status_code == 200:
#   request_response = r.json()
#   # Keep checking the request status until the download has completed
#   download_id = request_response['id']
#   download_status = request_response['status']

#   while (download_status != 'completed'):
#     time.sleep(5)
#     download_r = requests.get('https://api.datafiniti.co/v4/downloads/' +
#                               str(download_id),
#                               headers=request_headers)
#     download_response = download_r.json()
#     download_status = download_response['status']
#     print('Records downloaded: ' + str(download_response['num_downloaded']))

#   # Once the download has completed, get the list of links to the result files and download each file
#   if download_status == 'completed':
#     result_list = download_response['results']
#     i = 1
#     for result in result_list:
#       filename = str(download_id) + '_' + str(i) + '.' + format
#       urllib.request.urlretrieve(result, filename)
#       print('File: ' + str(i) + ' out of ' + str(len(result_list)) +
#             ' saved: ' + filename)
#       i += 1

# else:
#   print('Request failed')

# f = open("237149_1.JSON", 'r')
# parsedR = json.loads(f.read())

# df = pd.json_normalize(parsedR)
# print(df.columns)
# print(df["address"])
# df.drop(columns=['dateAdded', 'dateUpdated', 'latitude', 'longitude', 'lotSizeValue', 'lotSizeUnit', 'mostRecentStatusFirstDateSeen', 'mlsNumber', 'propertyTaxes', 'propertyType', 'province', 'statuses', 'yearBuilt','id'], axis=1, inplace=True)
# print(df["prices"].columns)
# f.close()
