import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'
import { Column } from 'serverless-design-system'

import LinkCatcher from './LinkCatcher'
import redHighlighter from 'src/assets/images/red-highlighter.png'

const Wrapper = styled(Column)`
  input:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  h3 a {
    color: black;
  }

  p,
  li {
    font-family: 'Soleil';
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    color: #5b5b5b;
    line-height: 1.33;
  }

  li {
    line-height: 1.5;
  }

  .docs-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  }

  blockquote {
    margin: 0;
    margin-top: 10px;
    position: relative;

    & > p {
      margin-top: 5px;
      font-family: Soleil;
      font-size: 24px;
      font-weight: normal;
      font-style: italic;
      line-height: 1.33;
      color: #000000;
    }

    &:before {
      content: ' ';
      position: absolute;
      height: 39px;
      top: 0;
      width: 20px;
      background: url(${redHighlighter});
      background-size: cover;
      left: -40px;
    }
  }

  a {
    color: #5b5b5b;
    text-decoration: none;

    &:hover {
      color: #5b5b5b;
    }
  }

  .hljs {
    padding-left: 32px;
    padding-top: 32px;
    padding-bottom: 32px;

    &:before {
      width: 0px;
    }
  }

  /* Docs Content */
  .content {
    display: block;
    flex-grow: 1;
    position: relative;
    padding-top: 32px;
    max-width: 82.5%;
    padding-bottom: 62px;
    overflow: hidden;
    padding-left: 104px;
    $copyWidth: 45px;

    code {
      max-width: 82.5%;
      overflow-x: auto;
    }

    .docsSectionSubHeader h4 {
      font-size: 24px;
      line-height: 38px;
      letter-spacing: -0.38px;
    }

    a {
      border-bottom: 1px solid #fd5750;

      &:hover {
        border-bottom: none;
      }
    }

    p {
      margin-top: 32px;
      margin-bottom: 32px;
      line-height: 26px;
      letter-spacing: 0px;
    }

    h3 {
      font-size: 18px;
      font-family: 'Soleil';
    }

    h1,
    h2,
    h4,
    h5,
    h6 {
      font-family: 'Soleil';
      line-height: 44px;
      letter-spacing: -0.5px;
      color: #000000;

      &[id] {
        margin-top: 40px;
      }
    }

    .examples {
      display: flex;
      flex-wrap: wrap;

      .example {
        border: solid 1px #eaeaea;
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 30%;
        padding: 32px;
        margin-bottom: 62px;

        &:nth-child(3n + 2) {
          margin-left: 32px;
          margin-right: 32px;
        }

        .language {
          color: #8c8c8c;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0;
          font-family: 'Soleil';
        }

        .title {
          font-size: 18px;
          line-height: 24px;
          letter-spacing: -0.28px;
          font-family: 'Soleil';
          font-weight: normal;
          margin-top: 8px;
        }

        .description {
          max-width: 100%;
          margin-top: 22px;
          margin-bottom: 22px;
        }

        .github {
          color: #fd5750;

          &:before {
            background-color: white;
          }
        }
      }
    }

    .phenomic-HeadingAnchor {
      display: inline-block;
      position: absolute !important;
      text-align: left;
      margin-right: 0;
      width: 130px;
      margin-left: -59px;
      /* line-height: 1.4rem; */
      text-decoration: none;
      opacity: 1;
      line-height: inherit;
      color: transparent;
      transition: opacity 0.3s;
      border-bottom: none !important;
      &:before {
        content: '#';
        transform: none;
        position: absolute;
        top: 0px;
        left: 30px;
        background-color: transparent;
        height: auto;
        color: #8c8c8c;
        visibility: visible;
      }
      &:hover:before {
        color: black;
      }
      &:after {
        opacity: 0.4;
        visibility: hidden;
        position: absolute;
        content: 'copy link';
        text-align: center;
        height: 20px;
        transform: none;
        width: 55px;
        font-size: 11px;
        padding: 3px 5px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: white;
        background-color: #191919;
        top: 85%;
        left: 8px;
        border-radius: 3px;
        transition: 0.25s ease-in-out 0s;
      }
      &:hover {
        opacity: 1;
      }
      &:active:after {
        content: 'copied!' !important;
        background-color: #787878;
      }
      &:hover:after {
        visibility: visible;
      }
    }
    a {
      position: relative;
      &:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
      &:before {
        position: absolute;
        bottom: -1px;
        visibility: hidden;
        width: 100%;
        height: 1px;
        content: '';
        transition: all 0.15s ease-in-out 0s;
        transition-delay: 0s;
        transform: scaleX(0);
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      max-width: 100%;
      position: relative;
    }
    p {
      max-width: 800px;
      position: relative;
    }
    p,
    pre,
    code,
    ul,
    li {
      position: relative;
    }
    ul {
      padding-left: 25px;
      padding-right: 80px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      &:before {
        display: block;
        content: ' ';
        visibility: hidden;
      }
    }
    h1 {
      font-size: 32px;
      &:first-of-type {
        margin-top: 0px;
        .phenomic-HeadingAnchor {
          display: none;
        }
      }
    }
    h2 {
      font-size: 32px;
    }
    h4 {
      font-size: 18px;
    }
  }

  .algolia-autocomplete .ds-dropdown-menu:before {
    width: 0px;
    height: 0px;
  }

  .algolia-autocomplete {
    width: 100%;
  }

  .algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu {
    left: 0 !important;
  }

  .docsSections {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 80%;
    position: relative;
    z-index: 3;
    a {
      border: none !important;
    }
    > div {
      margin-right: 20px;
      padding: 10px !important;
      margin-top: 20px;
      ul {
        width: 100%;
        padding-right: 0px;
        padding-left: 30px;
      }
    }
  }

  .providersSections {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    max-width: 100%;
    position: relative;
    z-index: 3;
    a {
      border: none !important;
      &:hover {
        box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
        border: solid 1px rgba(234, 234, 234, 0.3);
      }
      &:before {
        background-color: white;
      }
    }
    > div {
      margin-right: 20px;
      padding: 10px !important;
      margin-top: 20px;
      ul {
        width: 100%;
        padding-right: 0px;
        padding-left: 30px;
      }
    }
  }

  .docsSection {
    width: 100%;
  }

  .docsProviderItems {
    column-count: 4;
    > ul {
      margin-top: 0;
    }
  }

  .providerSection {
    width: 280px;
    height: 213px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
  }

  .docsSectionHeader,
  .docsSectionHeader a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .docsSectionHeader a {
    text-decoration: none;
    border-bottom: 0px;
    margin: 10px 0px;
    &:before {
      visibility: hidden !important;
    }
  }

  .docsSectionHeader img {
    width: 90%;
    border-radius: 6px;
  }

  .docsSection ul {
    padding-left: 30px;
  }

  .docsSection ul li {
    padding-bottom: 3px;
  }

  .providerSectionHeader,
  .providerSectionHeader a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .providerSectionHeader a {
    text-decoration: none;
    border-bottom: 0px;
    margin: 10px 0px;
    &:before {
      visibility: hidden !important;
    }
  }

  .providerSectionHeader {
    img {
      width: 90%;
      border-radius: 6px;
    }

    .google-logo,
    .cloudflare-logo,
    .kubeless-logo {
      width: 75%;
    }

    .fn-logo {
      width: 60%;
    }
  }

  .providerSectionHeader:nth-child(2) img {
    width: 30%;
    border-radius: 6px;
  }

  .providerSection ul {
    padding-left: 30px;
  }

  .providerSection ul li {
    padding-bottom: 3px;
  }

  & {
    margin-top: 62px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .docContainer {
    margin-top: 0px;
  }
  .docWrapper {
    display: flex;
    margin-top: 0px;
  }

  .breadcrumbs a {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.44px;
    color: #8c8c8c !important;
    font-family: 'Soleil' !important;
  }

  .current {
    a {
      color: white !important;
    }
  }

  .breadCrumbContainer {
    margin: 0 auto;
    display: flex;
    max-width: 1216px;
    justify-content: space-between;
    padding: 9px 0px 11px 0px;
    font-size: 15px;
    background: #000;
    a {
    }
    a:hover {
      opacity: 1;
    }
    .rightContent {
      width: 706px;
    }
  }
  .versionNumber {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.58px;
    color: #9b9b9b;
  }
  .sidebar {
    min-width: 296px;
    max-width: 296px;
    z-index: 5;
    background: #f6f6f6;
  }
  .sidebarBlock {
    margin-left: -10px;
    padding: 10px;
    padding-right: 0px;
    min-width: 296px;
    max-width: 296px;
    border: none;
    box-shadow: none;
  }
  .sidebarLinks {
    margin-bottom: 5px;
    a:hover {
      border-bottom: 1px dashed black;
    }
  }
  .searchBumper {
    min-height: 74px;
    background: #f6f6f6;
    min-width: 250px;
    max-width: 250px;
  }

  .searchWrapper {
    background: #f6f6f6;
    min-width: 250px;
    max-width: 250px;
    z-index: 600;
    padding: 15px;
    padding-top: 19px;
    padding-bottom: 20px;
  }
  .searchBox {
    min-width: 220px;
  }

  .sidebarInner {
    min-width: 250px;
    max-width: 250px;
    padding: 0px;
    background: #f6f6f6;
  }

  a.editLinkWrapper {
    border: none;
    display: inline-block;
    font-size: 13px;
    padding: 5px;
    /* padding-top: 1px; */
    position: absolute;
    right: 20px;
    top: 5px;
    &:before {
      display: none;
    }
  }
  .editLink {
    position: absolute;
    right: 20px;
    top: 130px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #555;
    cursor: pointer;
    .SVGInline {
      display: flex;
      height: 100%;
    }
    .text {
      margin-left: 5px;
      padding-top: 1px;
    }
    img {
      width: 17px;
      height: 17px;
    }
  }
  .currentURL a {
    font-weight: 600;
    &:after {
      content: '-';
      position: absolute;
      color: #a5a5a5;
      left: -10px;
      transform: none;
      transition: none;
    }
  }
  .pageContext {
    text-transform: capitalize;
    font-weight: 600;
    padding: 0;
    margin: 0px 20px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding-bottom: 0px;
    padding-top: 0;
    font-size: 15px;
    line-height: 1.63;
  }
  .subPages {
    padding: 10px;
    margin: 0 10px;
    margin-top: 0px;
    padding-top: 0;
    padding-left: 15px;
    padding-right: 0px;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
  .forumCta {
    padding: 0 20px;
    margin-top: 20px;
    h2 {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: -0.015rem;
      line-height: 1.63;
    }
    p {
      font-size: 14px;
      margin-top: 0px;
      line-height: 1.63;
    }
    .forumLink {
      color: #6060e0;
      font-size: 15px;
    }
  }
  strong {
    font-weight: 600;
  }
  .subPageLinkHeading {
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
  }
  .subPageLink {
    font-size: 14px;
    line-height: 2.3;
    cursor: pointer;
    a {
      text-decoration: none;
      border: none;
      position: relative;
      width: 100%;
      display: block;
      &:hover {
        color: #000;
      }
      &:hover:after {
        content: '-';
        position: absolute;
        color: #a5a5a5;
        left: -10px;
        transform: none;
        transition: none;
      }
    }
  }

  @media (max-width: 1600px) {
    .breadCrumbContainer {
      .rightContent {
        width: 717px;
      }
    }
  }

  @media (max-width: 1315px) {
    .breadCrumbContainer {
      .rightContent {
        width: 626px;
      }
    }
  }

  //small laptop
  @media (min-width: 1025px) and (max-width: 1398px) {
    .breadCrumbContainer {
      max-width: 76%;
    }

    .providerSection {
      width: 200px;
      height: 180px;
    }
  }

  //normal laptop
  @media (min-width: 1399px) and (max-width: 1599px) {
    .providerSection {
      width: 240px;
      height: 190px;
    }

    .breadCrumbContainer {
      max-width: 76%;
    }
  }

  //tablet
  @media (max-width: 1025px) {
    .sidebar {
      display: none;
    }

    .content {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 62px;
      max-width: 100%;
      pre code:global(.hljs) {
        margin-left: -30px !important;
        padding-left: 30px !important;
        padding-right: 30px !important;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        max-width: 100%;
        padding-right: 25px;
        margin-top: 22px;
        margin-bottom: 22px;
      }

      .docsSections {
        width: 100%;
        max-width: 100%;
      }
      .docsSection {
        width: 95%;
      }
      .docsSection {
        margin-bottom: 20px;
      }
      .docsSectionHeader,
      .docsSectionHeader a {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .providersSections {
        max-width: 100%;
      }
      .providerSection {
        width: 95%;
      }
      .providerSection {
        margin-bottom: 20px;
      }
    }

    blockquote {
      & > p {
        padding-left: 40px;
      }

      &:before {
        left: 0;
        top: 0;
      }
    }

    iframe {
      width: 100%;
      height: 360px;
    }

    & {
      margin-top: calc(47px);
    }
    .sidebar {
      z-index: 9;
    }
    .sidebarInner {
      min-width: 100%;
      padding-top: 10px;
      background: #fff;
    }
    .breadCrumbContainer {
      flex-direction: column;
      font-size: 14px;
    }
    .breadCrumbContainer li:first-of-type {
      display: none;
    }
    .searchBumper {
      min-height: inherit;
      margin-bottom: 3px;
      margin-top: 8px;
    }
    .searchWrapper {
      margin-top: 0px;
      border-top: none;
      padding: 0px;
    }
    .searchBox {
      width: 90%;
      box-shadow: none;
    }
    a.editLinkWrapper {
      bottom: 0px;
      left: 15px;
      padding: 0px;
      margin-bottom: 25px;
      top: inherit;
      right: inherit;
      display: none;
    }
    .editLink {
      display: none;
    }
    .versionNumber {
      display: none;
    }
    .page,
    .sidebar,
    .searchBumper,
    .searchWrapper {
      max-width: 100%;
      min-width: 100%;
    }
    .sidebar {
      margin-bottom: 35px;
    }
    .docWrapper {
      flex-direction: column;
      flex-flow: column-reverse;
    }
    .content {
      font-size: 14px;
      pre code:global(.hljs) {
        font-size: 11px;
        line-height: 1.4;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 32px;
      }

      .phenomic-HeadingAnchor {
        display: none;
      }
      ol,
      ul {
        font-size: 13px;
        padding: 0px 20px;
      }
      li {
        margin-bottom: 5px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        padding-right: 20px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        &:before {
          display: block;
          content: ' ';
          visibility: hidden;
        }
      }
      ul {
        padding-right: 10px;
      }
    }

    .subPageLink,
    .subPageLinkHeading {
      font-size: 16px;
    }
  }

  //mobile
  @media screen and (max-width: 415px) {
    iframe {
      width: 100%;
      height: auto;
    }

    .content {
      padding-left: 30px;
      padding-right: 30px;
      h1,
      h2 {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: -0.38px;
        max-width: 90%;
      }

      p {
        max-width: 90%;
      }

      .providerSections {
        justify-content: space-between;
      }

      .providerSection {
        width: 128px;
        height: 97px;
      }

      .docsProviderItems {
        column-count: 2;
      }
    }
  }
`
const Clipboard = typeof window !== 'undefined' ? require('clipboard') : null
const preventDefault = e => e.preventDefault()

export default class DocsWrapper extends React.Component {
  componentDidMount() {
    //TODO: hacky - find a better solution for offsetting anchor scroll
    if (typeof window !== 'undefined' && window.location.hash) {
      setTimeout(function() {
        window.scrollBy(0, -80)
      }, 1)
    }

    const domNode = ReactDOM.findDOMNode(this.ref) //eslint-disable-line

    this.linkCatcher = new LinkCatcher(domNode, navigateTo)

    const { origin, pathname } = window.location
    // disable anchor tags until they are removed
    this.attachHandlers()
    setTimeout(() => {
      this.clipboardInstance = new Clipboard('.phenomic-HeadingAnchor', {
        // eslint-disable-line
        text(trigger) {
          // eslint-disable-line
          return `${origin}${pathname.replace(/\/$/, '')}#${
            trigger.parentNode.id
          }`
        },
      })
    }, 10)
  }

  componentDidUpdate(previousProps, _prevState) {
    if (previousProps.__url !== this.props.__url) {
      this.dettachHandlers()
      setTimeout(() => {
        this.attachHandlers()
      }, 0)
    }
  }

  componentWillUnmount() {
    if (this.clipboardInstance) {
      this.clipboardInstance.destroy()
    }
    // disable anchor tags until they are removed
    this.dettachHandlers()
  }

  attachHandlers = () => {
    // attach link handlers
    this.linkCatcher.add()

    const html = document.documentElement
    if (html && html.className.indexOf('safari') > -1) {
      // clipboard doesnt work in safari
      return false
    }
    const elements = document.getElementsByClassName('phenomic-HeadingAnchor')
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', preventDefault, false)
    }
  }

  dettachHandlers = () => {
    // detach link handler
    this.linkCatcher.remove()

    const html = document.documentElement
    if (html && html.className.indexOf('safari') > -1) {
      return false
    }
    const elements = document.getElementsByClassName('phenomic-HeadingAnchor')
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener('click', preventDefault, false)
    }
  }

  render() {
    return (
      <Wrapper
        ref={ref => {
          this.ref = ref
        }}
        {...this.props}
      />
    )
  }
}
