import '../css/dropdown-menubar.styles.css';

interface DropDownMenuBar {
    getElement: () => HTMLElement;
    addOption: (option: MenuOption) => void;
    deleteOption: (idx: number) => void;
    modifyOption: (idx: number, option: Partial<MenuOption>) => void;
    setMaxWidth: (newMaxWidth: number) => void;
    setMenuTitle: (newTitle: string) => void;
    render: () => void;
}

interface MenuOption {
    optionTitle: string;
    clickHandler: EventListener | EventListenerObject;
}

export function dropDownMenu(
    menuTitle: string,
    maxWidth: number = 5,
): DropDownMenuBar {
    let state = {
        menuTitle: menuTitle,
        maxWidth: maxWidth,
        menuOptions: new Map<number, MenuOption>(),
        nextIdx: 1,
    };
    const element = createElement();
    render();

    function getElement(): HTMLElement {
        return element;
    }

    function createElement(): HTMLElement {
        const element = document.createElement('div');
        return element;
    }

    function addOption(option: MenuOption) {
        state.menuOptions.set(state.nextIdx, option);
        state.nextIdx++;
        render();
    }

    function modifyOption(idx: number, option: Partial<MenuOption>) {
        if (!state.menuOptions.has(idx)) {
            console.warn(`Menu option ${idx} does not exists`);
            return;
        }
        let curOption = {
            ...state.menuOptions.get(idx),
            ...option,
        } as MenuOption;
        state.menuOptions.set(idx, curOption);
        render();
    }

    function deleteOption(idx: number) {
        if (!state.menuOptions.has(idx)) {
            console.warn(
                `Trying to delete Menu option ${idx} that does not exists`,
            );
            return;
        }
        state.menuOptions.delete(idx);
        render();
    }

    function setMenuTitle(newTitle: string) {
        state.menuTitle = newTitle;
        render();
    }

    function setMaxWidth(maxWidth: number) {
        state.maxWidth = maxWidth;
        render();
    }

    function cleanElement() {
        while (element.firstChild) element.removeChild(element.firstChild);
    }

    function render() {
        cleanElement();
        element.innerText = state.menuTitle;
        element.style.maxWidth = `${state.maxWidth}rem`;
        element.addEventListener('mouseover', showMenuItems);
        element.addEventListener('mouseout', hideMenuItems);
        state.menuOptions.forEach((menuOption, id) => {
            renderOption(menuOption);
        });
    }

    function showMenuItems(event: MouseEvent | FocusEvent) {
        for (const child of Array.from(element.children))
            child.classList.remove('hide');
    }

    function hideMenuItems(event: MouseEvent | FocusEvent) {
        for (const child of Array.from(element.children))
            child.classList.add('hide');
    }

    function renderOption(menuOption: MenuOption) {
        const option = document.createElement('button');
        option.innerText = menuOption.optionTitle;
        option.addEventListener('click', menuOption.clickHandler);
        option.classList.add('hide');
        element.appendChild(option);
    }

    return {
        getElement,
        addOption,
        modifyOption,
        deleteOption,
        setMaxWidth,
        setMenuTitle,
        render,
    };
}
