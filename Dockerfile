FROM mhart/alpine-node

# Set the default working directory
WORKDIR /usr/src

# Install dependencies
COPY package.json yarn.lock lerna.json tsconfig.json ./
COPY ./packages ./packages
RUN yarn
RUN yarn run bootstrap
RUN yarn build
# Copy the relevant files to the working directory
COPY . .

# Build and export the app
RUN yarn build-storybook
