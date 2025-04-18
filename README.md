<!-- Copyright notice for this README.md template -->

<!-- MIT License

Copyright (c) 2021 Othneil Drew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/SilentStorm2k/dropdown-menubar">
    <img src="src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Dropdown Menubar</h3>

  <p align="center">
    A simple dropdown menubar written in TS
    <br />
    <a href="https://github.com/SilentStorm2k/dropdown-menubar"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://silentStorm2k.github.io/dropdown-menubar">View Demo</a>
    ·
    <a href="https://github.com/SilentStorm2k/dropdown-menubar/issues">Report Bug</a>
    ·
    <a href="https://github.com/SilentStorm2k/dropdown-menubar/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Dropdown Menubar screenshot][product-screenshot]](https://silentStorm2k.github.io/dropdown-menubar)

A simple menubar plugin for TS and JS built with TS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Typescript][Typescript-shield]][Typescript-url]
- [![CSS][CSS-shield]][CSS-url]
- [![HTML][HTML-shield]][HTML-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Simple plug and play, install the package and use it according to the usage guide.

```sh
  npm i dropdown-menubar
```

### Prerequisites

You must have node installed, otherwise wth you doing here? Might as well update npm while you're at it.

- npm
    ```sh
    npm install npm@latest -g
    ```

<!-- USAGE EXAMPLES -->

## Usage

- Create your Dropdown Menubar object by

    ```ts
    const menubar = dropDownMenu('menuTitle', 5); // title: string, maxWidth in rem: Number
    ```

- You can add menu options and modify them by giving them a title, and a onClickHandler for choosing that option

    ```ts
    menubar.addOption({
        optionTitle: '1: Prints G -> GG',
        clickHandler: () => {
            console.log('G');
        },
    });

    menu1.modifyOption(1, {
        optionTitle: 'Changed to reload page now',
        clickHandler: () => {
            location.reload();
        },
    });
    ```

- You can change your max width using

    ```ts
    menu1.setMaxWidth(10);
    ```

- And you can generate the div element which you can insert into your webpage

    ```ts
    const menuDiv = menu1.getElement(); // returns a div of the menubar

    const body = document.querySelector('body');
    body?.appendChild(menuDiv);
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Nothing planned so far, may come back to improve ui later?

See the [open issues](https://github.com/SilentStorm2k/dropdown-menubar/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Acknowledgements -->

## Acknowledgements

- Npm icon used as logo: <a href="https://www.flaticon.com/free-icons/npm" title="npm icons">Npm icons created by -Artist - Flaticon</a>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SilentStorm2k/dropdown-menubar.svg?style=for-the-badge
[contributors-url]: https://github.com/SilentStorm2k/dropdown-menubar/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilentStorm2k/dropdown-menubar.svg?style=for-the-badge
[forks-url]: https://github.com/SilentStorm2k/dropdown-menubar/network/members
[stars-shield]: https://img.shields.io/github/stars/SilentStorm2k/dropdown-menubar.svg?style=for-the-badge
[stars-url]: https://github.com/SilentStorm2k/dropdown-menubar/stargazers
[issues-shield]: https://img.shields.io/github/issues/SilentStorm2k/dropdown-menubar.svg?style=for-the-badge
[issues-url]: https://github.com/SilentStorm2k/dropdown-menubar/issues
[license-shield]: https://img.shields.io/github/license/SilentStorm2k/dropdown-menubar.svg?style=for-the-badge
[license-url]: https://github.com/SilentStorm2k/dropdown-menubar/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: src/assets/screenshot.gif
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Typescript-url]: https://www.typescriptlang.org/
[Typescript-shield]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[CSS-url]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics
[CSS-shield]: https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[HTML-shield]: https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white
