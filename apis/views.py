from django.shortcuts import render
from rest_framework.response import Response
from telegram.client import Telegram

# Create your views here.

def telegrams():
    tg = Telegram(
        api_id='21784856',
        api_hash='86646c9abbcb0e6d1b5fdfe90420b44b',
        phone='+918492010352',
        database_encryption_key='sarthakboy',
    )

    tg.login()
    response = tg.call_method('importContacts', {
        'contacts': [
            {'phone_number': '+57 555 123 4567'},
        ]
    })

    response.wait()
    user_ids = response.update['user_ids']

    
    if user_ids[0] == 0:
        print('This contact is NOT using Telegram.')
    else:
        print(f'¡This contact({user_ids[0]}) uses Telegram!')
    
    return Response({
        "status_code": 200,
    })