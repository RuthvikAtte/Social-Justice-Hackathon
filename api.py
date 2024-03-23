# Illustrates an API call to Datafiniti's Product Database for hotels.
import json
import pandas as pd
import requests

# Set your API parameters here.
API_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MDRlemcyZHpvdmZuZGJ6djdmNjhwdXNld3pmMWMyYiIsImlzcyI6ImRhdGFmaW5pdGkuY28ifQ.SEk-FqJShMHgqZflL7vydj1pPQvuGYgQfS7f8bs16LQS6ypl2r31PncPadnJ0m0eVKJDYPyOHn09xUd7L_CrAgevYQCWTy82ZJzTiG61h0o4ThExB_VIEXIjx-JN2dWN6GQtJ662z6-cWSZ6EOSGHzG6WgiQc6PPaAdtZjNFZr61ox_IB6QYgvW49Pi52J2RIV7aY3wdydUc9lhM0QzK9HotiDrJ8EyYQ1UHdDrLRe1gK_crMjIwo680lfcp7PCnLci9wdbVLB4eOOwYVb6O_siQmtv3GH4TrbqwfXhMWasq0LXuOz54-nUXBPFy4ik7hF4RRdrrwdyhyrjonU9SAcHkDvjxwiW6TkmCUZXG8fhtTuP0gqGWfQuGP0J-3eWBjlC-qm_4ob9ds2YW6kxs-LTa3_-Y5Nj_EIkrN5JjBWY6_FIZz6ZrZsThRVaHS9xgsuyCsPpQ1hIJooDmydZ9ElvM4LTDyvJxddqJFTw4dMbIQldhMajYwzf2xg8IYoaDTEGkMUxmBhNZTq1C0T8sgxxQ83xq_wV-9vbabvkOjY-snWIgV7O3sobTa5sWTuwDA8e4Vf1JcL5F6Oh7i_1Pn_xBkcKKwa_HUjLWmsZF6X6e6jE4snEgMVM6vXvrjcoU2Y1gMv1X3SpbDpPMyRFzsI5reFhkhVLinq_aZ6JnJa4"
format = "JSON"
download = True

request_headers = {
    "Authorization": "Bearer " + API_token,
    "Content-Type": "application/json",
}
request_data = {
    "query": query,
    "format": format,
    "num_records": num_records,
    "download": download,
}

# Make the API call.
r = requests.post(
    "https://api.datafiniti.co/v4/properties/search",
    json=request_data,
    headers=request_headers,
)

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
