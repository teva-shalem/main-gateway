(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{15:function(t,o,e){"use strict";e.r(o);var r={css:'tooltip .TooltipTrigger,[is="tooltip"] .TooltipTrigger{ position: relative; border-bottom: 3px solid #67C8EA; cursor: pointer; transition: all 0.3s ease; text-decoration: none; color: inherit; } tooltip .TooltipTrigger:focus,[is="tooltip"] .TooltipTrigger:focus{ outline: 0; background: #A4E1F6; } tooltip .TooltipTrigger:focus p,[is="tooltip"] .TooltipTrigger:focus p{ visibility: visible; opacity: 1; } tooltip .TooltipTrigger:focus p.top,[is="tooltip"] .TooltipTrigger:focus p.top{ transform: translate(-50%, -100%); } tooltip .TooltipTrigger:focus p.bottom,[is="tooltip"] .TooltipTrigger:focus p.bottom{ transform: translate(-50%, 100%); } tooltip .TooltipTrigger:focus p.left,[is="tooltip"] .TooltipTrigger:focus p.left{ transform: translate(-100%, -50%); } tooltip .TooltipTrigger:focus p.right,[is="tooltip"] .TooltipTrigger:focus p.right{ transform: translate(100%, -50%); } tooltip .Tooltip,[is="tooltip"] .Tooltip{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 5; } tooltip .Tooltip p,[is="tooltip"] .Tooltip p{ min-width: 100px; opacity: 0; display: inline-block; visibility: hidden; position: absolute; text-align: left; width: auto; background: #67C8EA; color: #ffffff; font-size: 1rem; line-height: 1.2; padding: 10px; border-radius: 3px; white-space: normal; box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2); transition: all 0.2s ease-out; } tooltip .Tooltip p.top,[is="tooltip"] .Tooltip p.top{ top: -45px; left: 50%; transform: translate(-50%, -150%); } tooltip .Tooltip p.top:before,[is="tooltip"] .Tooltip p.top:before{ position: absolute; content: ""; width: 0; height: 0; border-top: 8px solid #67C8EA; border-left: 8px solid transparent; border-right: 8px solid transparent; bottom: -8px; margin-left: -8px; left: 50%; } tooltip .Tooltip p.bottom,[is="tooltip"] .Tooltip p.bottom{ bottom: -15px; left: 50%; transform: translate(-50%, 150%); } tooltip .Tooltip p.bottom:before,[is="tooltip"] .Tooltip p.bottom:before{ position: absolute; content: ""; width: 0; height: 0; border-bottom: 8px solid #67C8EA; border-left: 8px solid transparent; border-right: 8px solid transparent; top: -8px; margin-left: -8px; left: 50%; } tooltip .Tooltip p.left,[is="tooltip"] .Tooltip p.left{ left: -15px; top: -15px; transform: translate(-150%, -50%); } tooltip .Tooltip p.left:before,[is="tooltip"] .Tooltip p.left:before{ position: absolute; content: ""; width: 0; height: 0; border-left: 8px solid #67C8EA; border-top: 8px solid transparent; border-bottom: 8px solid transparent; top: 50%; margin-top: -8px; right: -8px; } tooltip .Tooltip p.right,[is="tooltip"] .Tooltip p.right{ right: -15px; top: -15px; transform: translate(150%, -50%); } tooltip .Tooltip p.right:before,[is="tooltip"] .Tooltip p.right:before{ position: absolute; content: ""; width: 0; height: 0; border-right: 8px solid #67C8EA; border-top: 8px solid transparent; border-bottom: 8px solid transparent; top: 50%; margin-top: -8px; left: -8px; }',exports:function(){return{state:{active:!1},onMounted(){const t=this.$(".TooltipTrigger");t.addEventListener("focus",t=>{this.update({active:!0})}),t.addEventListener("blur",t=>{this.update({active:!1})}),t.addEventListener("mouseenter",t=>{t.target.focus()}),t.addEventListener("mouseleave",t=>{t.target.blur()})}}},template:function(t,o,e,r){return t('<a class="TooltipTrigger" href="#"><slot expr13="expr13"></slot><div expr14="expr14" class="Tooltip"><p expr15="expr15"> </p></div></a>',[{type:e.SLOT,attributes:[],name:"default",redundantAttribute:"expr13",selector:"[expr13]"},{redundantAttribute:"expr14",selector:"[expr14]",expressions:[{type:o.ATTRIBUTE,name:"aria-expanded",evaluate:function(t){return t.state.active}}]},{redundantAttribute:"expr15",selector:"[expr15]",expressions:[{type:o.TEXT,childNodeIndex:0,evaluate:function(t){return t.props.content}},{type:o.ATTRIBUTE,name:"class",evaluate:function(t){return t.props.position||"top"}}]}])},name:"tooltip"};o.default={css:'home nav,[is="home"] nav{ text-align: center; display: flex; flex-direction: column; align-items: center; } home p,[is="home"] p{ text-align: right; }',exports:{components:{Tooltip:r}},template:function(t,o,e,r){return t('<h2>הזמנה</h2><tooltip expr3="expr3" content="test2"></tooltip><tooltip expr4="expr4" content="test2"></tooltip><p>שלום וברוכים הבאים. טבע שלם הוא פרוייקט חדש תחת השמש. הוא נקרא גם פרוייקט המשי"ח - מערכת שלמה ישראל חיה. מטרתו היא קיימות של המין האנושי על פני אדמות. קהל היעד הוא כל תושבי כדור הארץ, והוא נועד להשיג אושר, שפע ושלום לכלל התושבים. לב הפרוייקט הוא מעל"ה - מערכת לימוד הנפש. המערכת בנויה עפ מודל עץ המלך - 12 ענפים ו12 היכלות של העמקה בריפוי והתפתחות הנפש, עד לנקודה הפנימית ביותר של אדם וטבע כמיכלול שלם. הייחוד.</p><p>התהליך מתבצע במספר ערוצים:</p><router expr5="expr5"></router><p>הנכם מוזמנים למצוא את החיבור האישי שלכם למעשה המרכבה הזה.<p><p>למצוא בית לנפש והדרכה לרפואתה.<p><p>להיות שותפים לבנייה של ממלכה משותפת, תורה חיה וגן עדן עלי אדמות.<p><h2>מי אני?</h2><p>שמי דוד ישראל כהן. יליד 1979. נולדתי וגדלתי בירושלים. שירתתי בצבא כמפקד ספינה. משנת 2002 מתמודד עם סכיזופרניה ופוסט טראומה, ונמצא במסע חקר ולימוד נפש האדם.</p><p>עוסק באומנות והדרכה לבריאות הנפש - 2009</p><p>ממייסדי פרוייקט mind&fitness - מרכז גוף נפש למתמודדים נפשית - 2013</p><p>מפתח דרך הפעימה לריפוי והתפתחות נפש האדם - 2018.</p><p>- מפתח מעל"ה - מערכת לימוד הנפש - 2020.</p><p>מפתח נוסחאות הפעימה - 2020</p><p>:מערכת טבע שלם נמצאת בהתהוות. לקבלת עדכונים, פרטים נוספים או השתלבות אישית בתכנית</p></p></p></p></p></p></p>',[{type:e.TAG,getComponent:r,evaluate:function(t){return"tooltip"},slots:[{id:"default",html:"test1",bindings:[]}],attributes:[],redundantAttribute:"expr3",selector:"[expr3]"},{type:e.TAG,getComponent:r,evaluate:function(t){return"tooltip"},slots:[{id:"default",html:"test1",bindings:[]}],attributes:[],redundantAttribute:"expr4",selector:"[expr4]"},{type:e.TAG,getComponent:r,evaluate:function(t){return"router"},slots:[{id:"default",html:'<nav><ul><li><a href="#">פטריאון</a></li><li><a href="#">פורום</a></li><li><a href="https://books.teva-shalem.com/">ספרים</a></li></ul><ul><li><a href="/art">אומנות</a></li><li><a href="/school">בי״ס פעימה</a></li><li><a href="/portal">פורטל</a></li></ul></nav><route expr6="expr6" path="/art"></route><route expr8="expr8" path="/school"></route><route expr10="expr10" path="/portal"></route>',bindings:[{type:e.TAG,getComponent:r,evaluate:function(t){return"route"},slots:[{id:"default",html:'<art expr7="expr7"></art>',bindings:[{type:e.TAG,getComponent:r,evaluate:function(t){return"art"},slots:[],attributes:[],redundantAttribute:"expr7",selector:"[expr7]"}]}],attributes:[],redundantAttribute:"expr6",selector:"[expr6]"},{type:e.TAG,getComponent:r,evaluate:function(t){return"route"},slots:[{id:"default",html:'<school expr9="expr9"></school>',bindings:[{type:e.TAG,getComponent:r,evaluate:function(t){return"school"},slots:[],attributes:[],redundantAttribute:"expr9",selector:"[expr9]"}]}],attributes:[],redundantAttribute:"expr8",selector:"[expr8]"},{type:e.TAG,getComponent:r,evaluate:function(t){return"route"},slots:[{id:"default",html:'<portal expr11="expr11"></portal>',bindings:[{type:e.TAG,getComponent:r,evaluate:function(t){return"portal"},slots:[],attributes:[],redundantAttribute:"expr11",selector:"[expr11]"}]}],attributes:[],redundantAttribute:"expr10",selector:"[expr10]"}]}],attributes:[],redundantAttribute:"expr5",selector:"[expr5]"}])},name:"home"}}}]);