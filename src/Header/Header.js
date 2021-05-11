import React from 'react'
import {Search} from "./Search"
import {MainMenu} from "./MainMenu"
import {Icon} from "./Icon"
import './Header.scss'

export const Header = () => (
    <div className='header-wrapper'>
        <Icon />
        <MainMenu/>
        <Search/>
        <a href="#"><span>Добавить рецепт</span></a>
        <a href="#"><span>Войти</span></a>
    </div>
)