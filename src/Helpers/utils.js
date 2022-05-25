const setCurrentMode = () => {
    const mode = localStorage.getItem('currentMode');

    if (!mode) {
        localStorage.setItem('currentMode', 'dark');
        document.documentElement.classList.add('dark-layout');
        document.documentElement.classList.remove('light-layout');
        return;
    }

    if (mode === 'dark') {
        document.documentElement.classList.add('dark-layout');
        document.documentElement.classList.remove('light-layout');
        return;
    }

    if (mode === 'light') {
        document.documentElement.classList.add('light-layout');
        document.documentElement.classList.remove('dark-layout');
        return;
    }
};

const changeBobyClass = (add, remove) => {
    const classToAdd = add.split(' ');
    const classToRemove = remove.split(' ');

    console.log(classToAdd);
    console.log(classToRemove);

    classToRemove.forEach((item) => {
        document.body.classList.remove(item);
    });

    classToAdd.forEach((item) => {
        document.body.classList.add(item);
    });
};

export {
    setCurrentMode,
    changeBobyClass,
}