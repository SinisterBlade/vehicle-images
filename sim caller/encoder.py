import base64

with open("24car2.jpg", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    with open('string.txt', "w") as str_file:
        str_file.write(encoded_string)