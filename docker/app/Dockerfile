FROM node:15.1.0-stretch

ARG BUILD_ENV

WORKDIR /code

CMD ["sh", "-c", "yarn && yarn ${BUILD_ENV} && /bin/bash"]