"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{7587:function(a,b,c){c.r(b),c.d(b,{default:function(){return m}});var d=c(5111);c(7294);let e=d.C`
    :after {
        background-color: ${(0,d.g)("light",90)};
    }

    :hover {
        :after {
            background-color: ${(0,d.g)("light",70)};
        }
    }

    :active {
        :after {
            background-color: ${(0,d.g)("light",50)};
        }
    }
`,f=d.C`
    background-color: ${d.c.red};
    border-color: ${d.c.red};
    color: ${d.c.red};

    :focus {
        box-shadow: 0px 0px 0px 2px ${d.c.paleCerulean};
    }

    svg {
        fill: ${d.c.red};
    }

    ${e}
`,g=d.C`
    background-color: ${d.c.green};
    border-color: ${d.c.green};
    color: ${d.c.green};

    :focus {
        box-shadow: 0px 0px 0px 2px ${d.c.paleCerulean};
    }

    svg {
        fill: ${d.c.green};
    }

    ${e}
`,h=d.C`
    background-color: ${d.c.blue};
    border-color: ${d.c.blue};
    color: ${d.c.blue};

    :focus {
        box-shadow: 0px 0px 0px 2px ${d.c.paleCerulean};
    }

    svg {
        fill: ${d.c.blue};
    }

    ${e}
`,i=d.C`
    background-color: ${d.c.yellow};
    border-color: ${d.c.yellow};
    color: ${d.c.yellow};

    :focus {
        box-shadow: 0px 0px 0px 2px ${d.c.paleCerulean};
    }

    svg {
        fill: ${d.c.yellow};
    }

    ${e}
`,j=a=>{switch(a){case"red":return f;case"green":return g;case"blue":return h;case"yellow":return i;default:return}},k=(0,d.s)(d.B)`
    :after {
        background-color: ${(0,d.g)("dark",0)};
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

    ${({color:a})=>a&&j(a)}
`,{ButtonColoredStyled:l}={ButtonColoredStyled:k},m=({color:a,...b})=>(0,d.j)(l,{color:a,...b})}}])