import React from"react";import{setup,extractCss}from"goober";import{prefix}from"goober/prefixer";setup(React.createElement,prefix);const cache=new Map;export const onRenderBody=({setHeadComponents:e,pathname:t})=>{cache.has(t)||cache.set(t,extractCss()),e([React.createElement("style",{id:"_goober",key:"goober",dangerouslySetInnerHTML:{__html:" "+cache.get(t)}})])};