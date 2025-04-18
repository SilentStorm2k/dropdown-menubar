'use strict';
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
exports.__esModule = true;
exports.dropDownMenu = void 0;
require('../css/dropdown-menubar.styles.css');
function dropDownMenu(menuTitle, maxWidth) {
    if (maxWidth === void 0) {
        maxWidth = 5;
    }
    var state = {
        menuTitle: menuTitle,
        maxWidth: maxWidth,
        menuOptions: new Map(),
        nextIdx: 1,
    };
    var element = createElement();
    render();
    function getElement() {
        return element;
    }
    function createElement() {
        var element = document.createElement('div');
        return element;
    }
    function addOption(option) {
        state.menuOptions.set(state.nextIdx, option);
        state.nextIdx++;
        render();
    }
    function modifyOption(idx, option) {
        if (!state.menuOptions.has(idx)) {
            console.warn('Menu option '.concat(idx, ' does not exists'));
            return;
        }
        var curOption = __assign(
            __assign({}, state.menuOptions.get(idx)),
            option,
        );
        state.menuOptions.set(idx, curOption);
        render();
    }
    function deleteOption(idx) {
        if (!state.menuOptions.has(idx)) {
            console.warn(
                'Trying to delete Menu option '.concat(
                    idx,
                    ' that does not exists',
                ),
            );
            return;
        }
        state.menuOptions['delete'](idx);
        render();
    }
    function setMenuTitle(newTitle) {
        state.menuTitle = newTitle;
        render();
    }
    function setMaxWidth(maxWidth) {
        state.maxWidth = maxWidth;
        render();
    }
    function cleanElement() {
        while (element.firstChild) element.removeChild(element.firstChild);
    }
    function render() {
        cleanElement();
        element.innerText = state.menuTitle;
        element.style.maxWidth = ''.concat(state.maxWidth, 'rem');
        element.addEventListener('mouseover', showMenuItems);
        element.addEventListener('mouseout', hideMenuItems);
        state.menuOptions.forEach(function (menuOption, id) {
            renderOption(menuOption);
        });
    }
    function showMenuItems(event) {
        for (
            var _i = 0, _a = Array.from(element.children);
            _i < _a.length;
            _i++
        ) {
            var child = _a[_i];
            child.classList.remove('hide');
        }
    }
    function hideMenuItems(event) {
        for (
            var _i = 0, _a = Array.from(element.children);
            _i < _a.length;
            _i++
        ) {
            var child = _a[_i];
            child.classList.add('hide');
        }
    }
    function renderOption(menuOption) {
        var option = document.createElement('button');
        option.innerText = menuOption.optionTitle;
        option.addEventListener('click', menuOption.clickHandler);
        option.classList.add('hide');
        element.appendChild(option);
    }
    return {
        getElement: getElement,
        addOption: addOption,
        modifyOption: modifyOption,
        deleteOption: deleteOption,
        setMaxWidth: setMaxWidth,
        setMenuTitle: setMenuTitle,
        render: render,
    };
}
exports.dropDownMenu = dropDownMenu;
