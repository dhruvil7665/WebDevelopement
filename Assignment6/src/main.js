import './../scss/main.scss';


//The following variables gets all the dom elements required for the editor
let body = document.getElementsByTagName('body').item(0);
let textArea=document.getElementsByClassName('textArea').item(0);
let buttonBold=document.getElementsByClassName('toolsBold').item(0);
let buttonItalics=document.getElementsByClassName('toolsItalics').item(0);
let buttonUnderline=document.getElementsByClassName('toolsUnderline').item(0);
let buttonLeft=document.getElementsByClassName('toolsLeftAlign').item(0);
let buttonRight=document.getElementsByClassName('toolsRightAlign').item(0);
let buttonCenter=document.getElementsByClassName('toolsCenterAlign').item(0);
let buttonJustify=document.getElementsByClassName('toolsJustify').item(0);

//Code for event listener on click of bold button
buttonBold.addEventListener("click",function() {


    let selection = window.getSelection();//gets the selected area in the textArea
    let selectedText = selection.toString();//stores the selected area in form of text
    //let span = document.createElement('span');
    let range = selection.getRangeAt(0); // defines the range of the selection
    let parent = selection.anchorNode.parentElement; // gets the parent node of the selection
    let child = selection.anchorNode.parentElement.firstElementChild; // gets the child node of the parent node of the selection
    console.log("parent"+parent); // prints the parent element in the JavaScript console of the browser
    console.log("child"+child);
    if (parent.classList.contains("textArea")) {
        let span = document.createElement('span');
        span.classList = 'bolden'; // sets the class of the span to bolden to bold the text
        span.innerHTML = selectedText;
        console.log(span.innerText)
        range.deleteContents(); //deletes the previous contents of the selection
        range.insertNode(span);  // inserts a new node with selected text as the data in it
        buttonBold.setAttribute('class','toolsBoldClick')  // sets the class of html dom button bold to a specified class
    }
    else {
        let parentSuper=parent.parentElement; //gets the parent node od the parent node
        let parentEmperor=parentSuper.parentElement;
        if ((parent.classList.contains("bolden"))||(parent.classList.contains("unBold"))) {

            if (parent.classList.contains("bolden")) {
                parent.setAttribute('class', 'unBold');
                buttonBold.setAttribute('class','toolsBold')
            } else {
                parent.setAttribute('class', 'bolden');
                buttonBold.setAttribute('class','toolsBoldClick')

            }
        }else

        if((parentSuper.classList.contains("bolden"))||(parentSuper.classList.contains("unBold"))){
            if(parentSuper.classList.contains("bolden")){
                parentSuper.setAttribute('class', 'unBold');
                buttonBold.setAttribute('class','toolsBold')
            }else{
                parentSuper.setAttribute('class', 'bolden');
                buttonBold.setAttribute('class','toolsBoldClick')
            }
        } else{
            if((parentEmperor.classList.contains("bolden"))||(parentEmperor.classList.contains("unBold"))){
                if((parentEmperor.classList.contains("bolden"))){
                    parentEmperor.setAttribute('class', 'unBold');
                    buttonBold.setAttribute('class','toolsBold')
                }else{
                    parentEmperor.setAttribute('class', 'bolden');
                    buttonBold.setAttribute('class','toolsBoldClick')
                }
        }else {
                let span = document.createElement('span');
                span.classList = 'bolden';
                span.innerHTML = selectedText;
                console.log(span.innerText)
                range.deleteContents();
                range.insertNode(span);
                buttonBold.setAttribute('class','toolsBoldClick')
            // // parent.replaceWith(child);
            // let span = document.createElement('span');
            // span.classList = 'unBold';
            // span.innerHTML = selectedText;
            // console.log(span.innerText);
            //
            // range.deleteContents();
            // // parent.removeChild('child');
            // parent.remove();
            //
            // //parent.replaceChild(span,child);
            //
            // range.insertNode(span);
        }
    }

}

    selection.removeAllRanges();
});

//Code for event listener on click of italics button
let italicListener = (event) => {

    let selection = window.getSelection();
    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;
    let child = selection.anchorNode.firstChild;
    if (parent.classList.contains("textArea")) {
        let span = document.createElement('span');
        span.classList = 'makeItalics';
        span.innerHTML = selectedText;
        console.log(span.innerText)
        range.deleteContents();
        range.insertNode(span);
        buttonItalics.setAttribute('class','toolsItalicsClick');
    }
    else {
        let parentSuper = parent.parentElement;
        let parentEmperor = parentSuper.parentElement;
        if ((parent.classList.contains("makeItalics")) || (parent.classList.contains("makeNonItalic"))) {

            if (parent.classList.contains("makeItalics")) {
                parent.setAttribute('class', 'makeNonItalic'); // sets the style of italic text to non-Italic
                buttonItalics.setAttribute('class','toolsItalics');
            } else {
                parent.setAttribute('class', 'makeItalics');
                buttonItalics.setAttribute('class','toolsItalicsClick');

            }
        } else if ((parentSuper.classList.contains("makeItalics")) || (parentSuper.classList.contains("makeNonItalics"))) {
            if (parentSuper.classList.contains("makeItalics")) {
                parentSuper.setAttribute('class', 'makeNonItalic');
                buttonItalics.setAttribute('class','toolsItalics');
            } else {
                parentSuper.setAttribute('class', 'makeItalics');
                buttonItalics.setAttribute('class','toolsItalicsClick');
            }
        } else {
            if ((parentEmperor.classList.contains("makeItalics")) || (parentEmperor.classList.contains("makeNonItalic"))) {
                if ((parentEmperor.classList.contains("makeItalics"))) {
                    parentEmperor.setAttribute('class', 'makeNonItalic');
                    buttonItalics.setAttribute('class','toolsItalics');
                } else {
                    parentEmperor.setAttribute('class', 'makeItalics');
                    buttonItalics.setAttribute('class','toolsItalicsClick');
                }
            } else {
                let span = document.createElement('span');
                span.classList = 'makeItalics';
                span.innerHTML = selectedText;
                console.log(span.innerText)
                range.deleteContents();
                range.insertNode(span);
                buttonItalics.setAttribute('class','toolsItalicsClick');
                // // parent.replaceWith(child);
                // let span = document.createElement('span');
                // span.classList = 'unBold';
                // span.innerHTML = selectedText;
                // console.log(span.innerText);
                //
                // range.deleteContents();
                // // parent.removeChild('child');
                // parent.remove();
                //
                // //parent.replaceChild(span,child);
                //
                // range.insertNode(span);
            }
        }
        selection.removeAllRanges();
    }};



buttonItalics.addEventListener('click', italicListener);

//Code for event listener on click of Underline button
let UnderlineListener = (event) => {
    let selection = window.getSelection();

    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;
    let child = selection.anchorNode.firstChild;
    if (parent.classList.contains("textArea")) {
        let span = document.createElement('span');
        span.classList = 'under';
        span.innerHTML = selectedText;
        console.log(span.innerText)
        range.deleteContents();
        range.insertNode(span);
        buttonUnderline.setAttribute('class','toolsUnderlineClick');
    }
    else {
        let parentSuper=parent.parentElement;
        let parentEmperor=parentSuper.parentElement;
        if ((parent.classList.contains("under"))||(parent.classList.contains("noUnder"))) {

            if (parent.classList.contains("under")) {
                parent.setAttribute('class', 'noUnder');
                buttonUnderline.setAttribute('class','toolsUnderline');
            } else {
                parent.setAttribute('class', 'under');
                buttonUnderline.setAttribute('class','toolsUnderlineClick');

            }
        }else

        if((parentSuper.classList.contains("under"))||(parentSuper.classList.contains("noUnder"))){
            if(parentSuper.classList.contains("under")){
                parentSuper.setAttribute('class', 'noUnder');
                buttonUnderline.setAttribute('class','toolsUnderline');
            }else{
                parentSuper.setAttribute('class', 'under');
                buttonUnderline.setAttribute('class','toolsUnderlineClick');
            }
        } else{
            if((parentEmperor.classList.contains("under"))||(parentEmperor.classList.contains("noUnder"))){
                if((parentEmperor.classList.contains("under"))){
                    parentEmperor.setAttribute('class', 'noUnder');
                    buttonUnderline.setAttribute('class','toolsUnderline');
                }else{
                    parentEmperor.setAttribute('class', 'under');
                    buttonUnderline.setAttribute('class','toolsUnderlineClick');
                }
            }else {
                let span = document.createElement('span');
                span.classList = 'under';
                span.innerHTML = selectedText;
                console.log(span.innerText)
                range.deleteContents();
                range.insertNode(span);
                buttonUnderline.setAttribute('class','toolsUnderlineClick');
                // // parent.replaceWith(child);
                // let span = document.createElement('span');
                // span.classList = 'unBold';
                // span.innerHTML = selectedText;
                // console.log(span.innerText);
                //
                // range.deleteContents();
                // // parent.removeChild('child');
                // parent.remove();
                //
                // //parent.replaceChild(span,child);
                //
                // range.insertNode(span);
            }
        }
    selection.removeAllRanges();

}};

buttonUnderline.addEventListener('click', UnderlineListener);


//Code for event listener on click of Left align button
let LeftAlignListener = (event) => {

    let selection = window.getSelection();

    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer.parentElement;
    let parent2 = range.commonAncestorContainer;
    console.log(parent);
    console.log(parent2);
    if(parent2!=null&&parent2.tagName=='DIV'){
        if(parent2.classList.contains("textArea")) {
            let div = document.createElement('div');
            let content = parent2.innerHTML;

            div.classList = 'LeftAlign';
            div.innerHTML = content;
            parent2.innerHTML = "";

            range.deleteContents();
            range.insertNode(div);
            buttonLeft.setAttribute('class','toolsLeftAlignClick');
            buttonRight.setAttribute('class','toolsRightAlign');
            buttonCenter.setAttribute('class','toolsCenterAlign');

        }else{
            parent2.classList='LeftAlign';
            buttonLeft.setAttribute('class','toolsLeftAlignClick');
            buttonRight.setAttribute('class','toolsRightAlign');
            buttonCenter.setAttribute('class','toolsCenterAlign');
        }

    }else{

        if(parent.classList.contains("textArea")) {
            let div = document.createElement('div');
            let content = parent.innerHTML;

            div.classList = 'LeftAlign';
            div.innerHTML = content;
            parent.innerHTML = "";

            range.deleteContents();
            range.insertNode(div);
            buttonLeft.setAttribute('class','toolsLeftAlignClick');
            buttonRight.setAttribute('class','toolsRightAlign');
            buttonCenter.setAttribute('class','toolsCenterAlign');

        }else{
            if(parent.tagName=="DIV") {
                console.log(parent)
                console.log("inside else of left");
                parent.classList = 'LeftAlign';
                buttonLeft.setAttribute('class', 'toolsLeftAlignClick');
                buttonRight.setAttribute('class', 'toolsRightAlign');
                buttonCenter.setAttribute('class', 'toolsCenterAlign');
            }else{

                for (let i = 1; i <= 3; i++) {

                    if(parent.tagName!="DIV"){
                        parent=parent.parentElement;
                    }else{
                        parent.classList = 'LeftAlign';
                        buttonLeft.setAttribute('class', 'toolsLeftAlignClick');
                        buttonRight.setAttribute('class', 'toolsRightAlign');
                        buttonCenter.setAttribute('class', 'toolsCenterAlign');
                        break;
                    }

                }


            }
        }



    }




        // } else {
        //     let span = document.createElement('span');
        //     span.classList = 'LeftAlign';
        //     span.innerHTML = selectedText;
        //     console.log(span.innerText)
        //     range.deleteContents();
        //     parent.remove();
        //     range.insertNode(span);
        // }

    selection.removeAllRanges();
};

buttonLeft.addEventListener('click', LeftAlignListener);

//Listener for Center Align button


//Code for event listener on click of centerAlign button
let CenterAlignListener = (event) => {

    let selection = window.getSelection();

    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer.parentElement;
    let parent2 = range.commonAncestorContainer;
    console.log("dfdf"+parent2.tagName);
    console.log(parent);
    if(parent2!=null&&parent2.tagName=='DIV'){
        if(parent2.classList.contains("textArea")) {
            console.log(parent2);
            let div = document.createElement('div');
            let content = parent2.innerHTML;

            div.classList = 'CenterAlign';
            div.innerHTML = content;
            parent2.innerHTML = "";

            range.deleteContents();
            range.insertNode(div);
            buttonLeft.setAttribute('class','toolsLeftAlign');
            buttonRight.setAttribute('class','toolsRightAlign');
            buttonCenter.setAttribute('class','toolsCenterAlignClick');

        }else{
            parent2.classList='CenterAlign';
            buttonLeft.setAttribute('class','toolsLeftAlign');
            buttonRight.setAttribute('class','toolsRightAlign');
            buttonCenter.setAttribute('class','toolsCenterAlignClick');
        }

    }else{

        if(parent.classList.contains("textArea")) {
            let div = document.createElement('div');
            let content = parent.innerHTML;

            div.classList = 'CenterAlign';
            div.innerHTML = content;
            parent.innerHTML = "";

            range.deleteContents();
            range.insertNode(div);
            buttonLeft.setAttribute('class','toolsLeftAlign');
            buttonRight.setAttribute('class','toolsRightAlign');
            buttonCenter.setAttribute('class','toolsCenterAlignClick');

        }else{


            console.log(parent)
            for (let i = 1; i <= 3; i++) {

                if(parent.tagName!="DIV"){
                    parent=parent.parentElement;
                }else{
                    parent.classList = 'CenterAlign';
                    buttonLeft.setAttribute('class','toolsLeftAlign');
                    buttonRight.setAttribute('class','toolsRightAlign');
                    buttonCenter.setAttribute('class','toolsCenterAlignClick');
                    break;
                }

            }


        }




    }

    selection.removeAllRanges();
};

buttonCenter.addEventListener('click', CenterAlignListener);

//Code for event listener on click of Right align button
let RightAlignListener = (event) => {

    let selection = window.getSelection();

    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer.parentElement;
    let parent2 = range.commonAncestorContainer;
    console.log(parent);
    console.log(parent2);
    if(parent2!=null&&parent2.tagName=='DIV'){
        if(parent2.classList.contains("textArea")) {
            let div = document.createElement('div');
            let content = parent2.innerHTML;

            div.classList = 'RightAlign';
            div.innerHTML = content;
            parent2.innerHTML = "";

            range.deleteContents();
            range.insertNode(div);
            buttonLeft.setAttribute('class','toolsLeftAlign');
            buttonRight.setAttribute('class','toolsRightAlignClick');
            buttonCenter.setAttribute('class','toolsCenterAlign');

        }else{
            parent2.classList='RightAlign';
            buttonLeft.setAttribute('class','toolsLeftAlign');
            buttonRight.setAttribute('class','toolsRightAlignClick');
            buttonCenter.setAttribute('class','toolsCenterAlign');
        }

    }else{

        if(parent.classList.contains("textArea")) {
            let div = document.createElement('div');
            let content = parent.innerHTML;

            div.classList = 'RightAlign';
            div.innerHTML = content;
            parent.innerHTML = "";

            range.deleteContents();
            range.insertNode(div);
            buttonLeft.setAttribute('class','toolsLeftAlign');
            buttonRight.setAttribute('class','toolsRightAlignClick');
            buttonCenter.setAttribute('class','toolsCenterAlign');

        }else{

            for (let i = 1; i <= 3; i++) {

                if(parent.tagName!="DIV"){
                    parent=parent.parentElement;
                }else{
                    parent.classList = 'RightAlign';
                    buttonLeft.setAttribute('class','toolsLeftAlign');
                    buttonRight.setAttribute('class','toolsRightAlignClick');
                    buttonCenter.setAttribute('class','toolsCenterAlign');
                    break;
                }

            }


        }



    }

    selection.removeAllRanges();
};

buttonRight.addEventListener('click', RightAlignListener);

//Code for event listener on click of Justify button
let JustifyListener = (event) => {
    let selection = window.getSelection();

    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer.parentElement;

    if (parent.classList.contains("textArea")) {
        let div = document.createElement('div');
        div.classList = 'Justify';
        div.innerHTML = parent.innerHTML;
        parent.innerHTML="";

        range.deleteContents();
        range.insertNode(div);
    }
    else {
        parent.classList = 'Justify';
    }
    selection.removeAllRanges();
};

buttonJustify.addEventListener('click', JustifyListener);




//Code for event listener on selection change to  highlights the button according to the styles given to a text
function listenerOnSelectionChange(){
    let selection = document.getSelection();
    if(selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        let node = range.commonAncestorContainer;
        buttonBold.setAttribute('class','toolsBold');
        buttonItalics.setAttribute('class','toolsItalics');
        buttonUnderline.setAttribute('class','toolsUnderline');
        let nodeStyle = node.parentElement; //gets the parent element of the node highlighted
        if(nodeStyle != null) {
            if (nodeStyle.tagName == 'SPAN') {
                for (let i = 1; i <= 3; i++) {
                    if (nodeStyle.getAttribute('class') == 'bolden') {
                        buttonBold.setAttribute('class', 'toolsBoldClick');
                    } else if (nodeStyle.getAttribute('class') == 'makeItalics') {
                        buttonItalics.setAttribute('class', 'toolsItalicsClick');
                    } else if (nodeStyle.getAttribute('class') == 'under') {
                        buttonUnderline.setAttribute('class', 'toolsUnderlineClick');
                    }
                    if (nodeStyle.tagName != 'SPAN') {
                        break;
                    }
                    nodeStyle = nodeStyle.parentNode;
                }
            }
        }

        while (node.tagName != 'DIV') {
            node = node.parentElement;
        }
        if (node.tagName == 'DIV') {
            buttonRight.setAttribute('class', 'toolsRightAlign');
            buttonLeft.setAttribute('class', 'toolsLeftAlign');
            buttonCenter.setAttribute('class', 'toolsCenterAlign');
            buttonJustify.setAttribute('class', 'toolsJustify');
            if (node.getAttribute('class') == 'CenterAlign') {
                buttonCenter.setAttribute('class', 'toolsCenterAlignClick');
            } else if (node.getAttribute('class') == 'LeftAlign') {
                buttonLeft.setAttribute('class', 'toolsLeftAlignClick');
            } else if (node.getAttribute('class') == 'RightAlign') {
                buttonRight.setAttribute('class', 'toolsRightAlignClick');
            } else if (node.getAttribute('class') == 'Justify') {
                buttonJustify.setAttribute('class', 'toolsJustifyClick');
            } else{
                node = node.parentElement;
                if (node.getAttribute('class') == 'CenterAlign') {
                    buttonCenter.setAttribute('class', 'toolsCenterAlignClick');
                } else if (node.getAttribute('class') == 'LeftAlign') {
                    buttonLeft.setAttribute('class', 'toolsLeftAlignClick');
                } else if (node.getAttribute('class') == 'RightAlign') {
                    buttonRight.setAttribute('class', 'toolsRightAlignClick');
                } else if (node.getAttribute('class') == 'Justify') {
                    buttonJustify.setAttribute('class', 'toolsJustifyClick');
                } else{
                    buttonLeft.setAttribute('class', 'toolsLeftAlignClick');
                }
            }
        }
    }
};

document.onselectionchange = listenerOnSelectionChange;
