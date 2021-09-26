
const getTitleFromPaths = (path) => {
    path = path.split('/');
    return path[path.length-1];
}

export default getTitleFromPaths;