from django.shortcuts import render
import random
import json
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView

# Create your views here.

def personality(request):

   fin = {"emailTech": 0, "emailEcomm": 0, "emailSocial": 0, "emailSearch": 0, "emailNews": 0, "emailMusic": 0, "emailTravel": 0, "emailOTT": 0, "emailEducation": 0}
   temp = json.load(request)
   data = temp['data']
   for i in data:
    if i == "registeredEmailTech":
        j = data[i]
        fin["emailTech"] = len(j)
    elif i == "registeredEmailEcomm":
        j = data[i]
        fin["emailEcomm"] = len(j)
    elif i == "registeredEmailSocial":
        j = data[i]
        fin["emailSocial"] = len(j) 
    elif i == "registeredEmailSearch":
        j = data[i]
        fin["emailSearch"] = len(j)
    elif i == "registeredEmailNews":
        j = data[i]
        fin["emailNews"] = len(j)
    elif i == "registeredEmailMusic":
        j = data[i]
        fin["emailMusic"] = len(j)
    elif i == "registeredEmailTravel":
        j = data[i]
        fin["emailTravel"] = len(j)
    elif i == "registeredEmailOTT":
        j = data[i]
        fin["emailOTT"] = len(j)
    elif i == "registeredEmailEducation":
        j = data[i]
        fin["emailEducation"] = len(j)
    max_cate = max(zip(fin.values(), fin.keys()))[1]

    feat_list = []
    act_feat = []
    if max_cate == "emailTech":
        feat_list = [
                    'apple',
                    'github',
                    'adobe',
                    'wordpress',
                    'jdid',
                    'samsung',
                    'zoho',
                    'envato',
                    'patreon',
                    'atlassian',
                    ]
        act_feat = "Technical Websites"
    elif max_cate == "emailEcomm":
        feat_list = [
                    'ebay',
                    'amazon',
                    'flipkart',
                    'bukalapak',
                    'lazada',
                    'tokopedia',
                    ]
        act_feat = "Ecommerce Websites"
    elif max_cate == "emailSocial":
        feat_list = [
                    'facebook',
                    'discord',
                    'google',
                    'instagram',
                    'twitter',
                    'pinterest',
                    'linkedin',
                    'microsoft',
                    'gravatar',
                    'myspace',
                    'skype',
                    'tumblr',
                    'vimeo',
                    'weibo',
                    'yahoo',
                    'ok',
                    'kakao',
                    'qzone',
                    'mailru',
                    'imgur',
                    ]
        act_feat = "Social Media Websites"
    elif max_cate == "emailSearch":
        feat_list = ['rambler', 'foursquare']
        act_feat = "Search Websites"
    elif max_cate == "emailNews":
        feat_list = ['flickr']
        act_feat = "NEWS Websites"
    elif max_cate == "emailMusic":
        feat_list = ['lastfm', 'spotify']
        act_feat = "Music Streaming Websites"
    elif max_cate == "emailTravel":
        feat_list = ['booking', 'airbnb']
        act_feat = "Travel Websites"
    elif max_cate == "emailOTT":
        feat_list = ['disneyplus', 'netflix']
        act_feat = "OTT Websites"
    elif max_cate == "emailEducation":
        feat_list = ['archiveorg', 'evernote', 'quora']
        act_feat = "Educational Websites"

    num = random.randint(1, int(len(feat_list)/2))
    txt = f"The user seems to be more active on {act_feat}. The next possible websites where user can create account on: {feat_list[-num]} or {feat_list[-(num-1)]}"
    output = {
        "status" : 200,
        "most_visited" : act_feat,
        "next" : feat_list[-num]
        # "data" : txt,
    }
    return JsonResponse(output)     