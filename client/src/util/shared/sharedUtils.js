export const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
};

export const requestQueryParamMaker = ({ params }) => {
    return Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
};
