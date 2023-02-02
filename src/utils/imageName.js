export const imageName = imgPath => {

    const lastIndex = imgPath.split('/').length - 1;
    const imageName = imgPath.split('/')[lastIndex].split('.')[0];

    return imageName;
}