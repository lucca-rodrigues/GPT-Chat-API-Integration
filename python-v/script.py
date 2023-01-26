import os
import openai
openai.organization = ""
openai.api_key = ""
openai.Model.list()


# curl https://api.openai.com/v1/completions \
#   -H 'Content-Type: application/json' \
#   -H 'Authorization: Bearer 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' \
#   -d '{
#   "model": "text-davinci-003",
#   "prompt": "Say about unit tests",
#   "max_tokens": 7,
#   "temperature": 0
# }'