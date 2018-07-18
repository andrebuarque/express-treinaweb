docker run -d \
    --name mongodb \
    --hostname mongo \
    -p 27017:27017 \
    -v /Users/andrebuarque/Projects/mongo-data:/data/db \
    -e MONGO_INITDB_ROOT_USERNAME=user \
    -e MONGO_INITDB_ROOT_PASSWORD=password mongo