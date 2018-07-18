docker run -d \
    -w /home/workspace/express-treinaweb \
    --link mongodb:mongodb \
    -v "$PWD":/home/workspace/express-treinaweb \
    -p 81:80 \
    --name express-treinaweb -it node