define("@widget/LAYOUT/bs-layout17-Theme-publish-Theme-26bf451f.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-index3","~/c/bs-index","~/c/bs-legacyOverrides","~/c/bs-boldOutline","~/c/bs-defaultSocialIconPack","~/c/bs-loaders","~/c/bs-headerTreatments"],(function(e,t,r,o,n,a,i,l,s){"use strict";const{colorPackCategories:g,buttons:d}=(global.Core||guac["@wsb/guac-widget-core"]).constants,{LIGHT:c,LIGHT_ALT:u,LIGHT_COLORFUL:m,DARK:h,DARK_ALT:p,DARK_COLORFUL:y,COLORFUL:b}=(global.Core||guac["@wsb/guac-widget-core"]).constants.paintJobs,f={[s.F]:"category-overlay",[s.a]:"category-overlay",[s.I]:"category-solid",[s.B]:"category-overlay",[s.L]:"category-overlay"};var S={id:"layout17",name:"dusk",packs:{color:"#7C4889",font:"cabin"},logo:{font:"primary"},packCategories:{color:g.ACCENT},headerProperties:{alignmentOption:"left"},headerTreatmentsConfig:{defaultHeaderTreatment:s.F,heroContentItems:["tagline","tagline2","cta"],imageTreatments:f},hasNavWithBackground:!0,showSlideshowTab:!0,paintJobs:[c,u,m,b,y,p,h],defaultPaintJob:h,buttons:{primary:{fill:d.fills.SOLID,shape:d.shapes.SQUARE,decoration:d.decorations.NONE,shadow:d.shadows.NONE,color:d.colors.PRIMARY},secondary:{fill:d.fills.SOLID,decoration:d.decorations.NONE,shadow:d.shadows.NONE,color:d.colors.PRIMARY},...o.C}};const x=["about1","content4","introduction4","payment1","payment2"],{FULL_UNDERLINE:C}=o.s,{buttons:H}=(global.Core||guac["@wsb/guac-widget-core"]).constants,I={style:{font:"primary",color:"highContrast",fontSize:"large",fontWeight:"normal",letterSpacing:"normal"}};class v extends r.D{static get displayName(){return"Theme17"}static getMutatorDefaultProps(e,t){const r=super.getMutatorDefaultProps(e,t),n=o.W[t]||r.enableCircularImage;return"HEADER"===e?{...r,hasLogoAlign:!0,showOverlayOpacityControls:!0,hasNavBackgroundToggle:!0,useSlideshow:!0,headerTreatmentsConfig:{...r.headerTreatmentsConfig,heroContentItems:["tagline","tagline2","cta"],imageTreatments:{[s.F]:"category-overlay",[s.a]:"category-overlay",[s.I]:"category-solid",[s.B]:"category-overlay",[s.L]:"category-overlay"}}}:{...r,enableCircularImage:n}}static getWidgetDefaultProps(e,t){return{...super.getWidgetDefaultProps(e,t),...("HEADER"===e||!x.includes(t))&&{alignmentOption:"left"}}}constructor(){super(),t._(this,"sharedInputStyles",{style:{borderColor:"inputDisabled",borderWidth:"xsmall",borderRadius:"none",borderStyle:"solid"}}),this.mappedValues={...this.mappedValues,backgroundColorNavSolid(){return r.g(this,"background").setAlpha(25)},typographyOverrides:{LogoAlpha:{...I},HeadingAlpha:{style:{font:"primary",color:"highContrast",fontSize:"xxxlarge",fontWeight:"normal",letterSpacing:"normal"}},HeadingBeta:{...I},HeadingGamma:{style:{font:"alternate",color:"highlight",fontSize:"xlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingEpsilon:{style:{font:"primary",color:"highContrast",fontSize:"xxlarge",fontWeight:"normal",letterSpacing:"none"}},NavAlpha:{style:{font:"alternate",color:"highContrast",fontSize:"medium",fontWeight:"normal",letterSpacing:"0.063em",textTransform:"none",":hover":{color:"highContrast"},":active":{color:"highContrast"}},active:{style:{fontWeight:"normal",color:"highContrast",paddingBottom:"xxsmall",borderBottom:"1px solid",":hover":{color:"highContrast"}}}},SubNavAlpha:{style:{font:"alternate",color:"section",fontSize:"medium",fontWeight:"normal",letterSpacing:"0.063em",textTransform:"none",":hover":{color:"section"},":active":{color:"section"}},active:{style:{fontWeight:"normal",color:"section",paddingBottom:"xxsmall",borderBottom:"1px solid",":hover":{color:"section"}}}},SubNavBeta:{style:{font:"alternate",color:"section",fontSize:"medium",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},ButtonAlpha:e=>{const{size:t="default"}=e;return{style:{font:"alternate",fontWeight:"bold",letterSpacing:"0.063em",textTransform:"none",...{small:{fontSize:"small"},default:{fontSize:"medium"},large:{fontSize:"mlarge"}}[t]}}},InputAlpha:e=>(global._||guac.lodash).merge(r.m.call(this,"BodyAlpha",e),{style:{color:"input","@xs-only":{fontSize:"medium"}}})}}}Section(e){return super.Section(this.merge({style:{paddingVertical:"xlarge","@xs-only":{paddingVertical:"large"}}},{...e,skipDivider:!0}))}Heading(e){const{tag:t,level:o}=e,{widgetType:a,widgetPreset:i}=this.base;return super.Heading(this.merge({typography:{2:"HeadingEpsilon"}[r.l({tag:t,level:o})],style:n.g(t,a,i)},e))}ContentBasic(e){const t=-1===x.indexOf(this.base.widgetPreset)?{alignment:"left"}:{};return super.ContentBasic(this.merge(t,e))}ContentCard(e){const t=-1===x.indexOf(this.base.widgetPreset)?{alignment:"left"}:{},r="about1"===this.base.widgetPreset?{style:{alignItems:"center"}}:{};return super.ContentCard(this.merge(t,r,e))}NavLink(e){return super.NavLink(this.merge({style:{lineHeight:"1.5em"}},e))}NavLinkActive(e){const t=this.parseSizedUnit(this.mapPropValue("padding","-xxsmall"))[0]-1;return this.NavLink(this.merge({active:!0,style:{marginBottom:t}},e))}Icon(e){return super.Icon(this.merge({iconPack:{...a.b,...i.s}},e))}Loader(e){return l.C.apply(this,[e])}Pipe(e){return super.Pipe(this.merge({style:{backgroundColor:"sectionContrast"}},e))}Phone({treatmentName:e,alignmentOption:t,...r}){const o=[s.I,s.B].includes(e);return super.Phone(this.merge({style:{paddingTop:"small","@sm":{paddingHorizontal:"medium",paddingTop:0,display:"inline-block"},"@md":{...o&&"center"!==t&&{paddingTop:"xlarge"}}}},r))}Hero(e){return super.Hero(this.merge({style:{textAlign:"center","@md":{maxWidth:"100%"}}},e))}HeroLeft(e){return this.Hero(this.merge({style:{"@sm":{borderColor:"rgba(255, 255, 255, 0.5)",borderLeftStyle:"solid",borderLeftWidth:"1px",paddingLeft:"large"},border:"none",paddingLeft:"none"}},e))}HeroRight(e){return this.Hero(this.merge({style:{"@sm":{borderColor:"rgba(255, 255, 255, 0.5)",borderRightStyle:"solid",borderRightWidth:"1px",paddingRight:"large"},border:"none",paddingRight:0}},e))}Tagline(e){return super.Tagline(this.merge({style:{"@xs-only":{maxWidth:"100%",marginBottom:"xsmall"}}},e))}HeroCenterHeading(e){return this.HeroHeading(this.merge({style:{borderBottomStyle:"solid",borderBottomWidth:"1px",borderColor:"rgba(255, 255, 255, 0.5)",paddingBottom:"small"}},e))}HeroText(e){return super.Text(this.merge({style:{lineHeight:"1.5"}},e))}Table(e){return super.Table(this.merge({style:{borderRadius:0}},e))}Input(e){return super.Input(this.merge({...this.sharedInputStyles},{style:{paddingVertical:"small",paddingHorizontal:"small"}},e))}InputFloatLabelInput(e){return super.InputFloatLabelInput(this.merge({style:{paddingBottom:"xsmall"}},e))}InputFloatLabelLabel(e){return super.InputFloatLabelLabel(this.merge({style:{left:"16px"}},e))}InputSelect(e){return super.InputSelect(this.merge({...this.sharedInputStyles},e))}InputSelectElement(e){return super.InputSelectElement(this.merge({style:{paddingVertical:"small",paddingHorizontal:"small"}},e))}Button(e){const t="small",{renderMode:r}=this.base,o=r&&r===(global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes.EDIT,{fill:n=this.getButtonDefaults().fill,color:a=this.getButtonDefaults().color,shadow:i=this.getButtonDefaults().shadow}=e,l=n!==H.fills.OPEN?{style:{transition:"all 0.3s",transitionProperty:"background-color",transitionDuration:"medium",transitionTimingFunction:"ease-in-out"}}:{},s=n===H.fills.SOLID&&i===H.shadows.NONE?{style:{...!o&&{":hover":{"@md":{boxShadow:`inset 0 0 0 ${this.mapPropValue("borderWidth",t)}`,color:{PRIMARY:{color:"primary"},HIGHCONTRAST:{color:"highContrast"}}[a].color,backgroundColor:"transparent"}}}}}:{};return super.Button(this.merge({customBorderWidth:t},s,l,e))}SectionHeading(e){const t="payment2"===this.base.widgetPreset?{style:{textAlign:"center"}}:{style:{textAlign:"left"}};return super.SectionHeading(this.merge({style:{"@xs-only":{marginBottom:"medium"}},sectionHeadingHR:C},t,e))}SectionSplitHeading(e){return this.SectionHeading(this.merge({style:{textAlign:"left"}},e))}DividerHR(e){return super.HR(this.merge({style:{borderColor:"! #999"}},e))}MediaObjectBackground(e){return super.MediaObjectBackground(this.merge({style:{borderRadius:"0"}},e))}HeadingMajor(e){return super.HeadingMajor(this.merge({typography:"HeadingEpsilon"},e))}PromoBanner(e){return super.PromoBanner(this.merge({style:{position:"relative",zIndex:2}},e))}}t._(v,"config",S),e.default=v,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-layout17-Theme-publish-Theme-26bf451f.js.map
