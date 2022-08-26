"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{300:function(a,b,c){c.r(b),c.d(b,{default:function(){return g}});var d=c(5111);c(7294);let e=(0,d.s)(d.B)`
    background-color: ${a=>{var b;return null==(b=a.customize)?void 0:b.backgroundColor}};

    span {
        color: ${a=>{var b;return null==(b=a.customize)?void 0:b.textColor}};
        font-size: ${a=>{var b;return(null==(b=a.customize)?void 0:b.fontSize)+"px"}};
    }

    svg {
        fill: ${a=>{var b;return null==(b=a.customize)?void 0:b.textColor}};
    }

    :after {
        background-color: transparent;
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
    }

    :hover {
        background-color: ${a=>{var b;return null==(b=a.customize)?void 0:b.backgroundColor}};

        :after {
            background-color: ${a=>{var b;return(null==(b=a.customize)?void 0:b.onHover)==="lighten"?(0,d.g)("light",20):(0,d.g)("dark",20)}};
        }
    }

    :active {
        :after {
            background-color: ${a=>{var b;return(null==(b=a.customize)?void 0:b.onHover)==="lighten"?(0,d.g)("light",40):(0,d.g)("dark",40)}};
        }
    }
`,{ButtonCustomStyled:f}={ButtonCustomStyled:e},g=({customize:a,...b})=>(0,d.j)(f,{customize:a,...b})}}])