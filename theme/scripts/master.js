/*jshint esversion: 6 */
var mindArc = (function() {
    'use strict';
    function init(){
        main.getData();
        main.toggleData();

    }
    var main = {
        getData : function() {
			fetch('../../data.json')
            .then(response => response.json())
            .then(data => {
                for(var i = 0; i < data.length; i++){
                    var title = i + 1;
                    console.log(data[i].content);
                    document.getElementById("title" + title).innerHTML =  data[i].title;
                    document.getElementById("tabbing" + title).innerHTML =  data[i].title;
                    var myNewTable = document.createElement("div");
                    myNewTable.innerHTML = data[i].content;
                    document.getElementById("tab" + title).appendChild(myNewTable);
                }
            });


        },
        toggleData : function(){
            var myTabs = document.querySelectorAll("ul.data-wrapper__tabs__items > li > a");
            var myAccordion = document.querySelectorAll(".data-wrapper__container > h3");
            function myTabClicks(tabClickEvent) {
                    for (var i = 0; i < myTabs.length; i++) {
                        myTabs[i].classList.remove("active");
                    }
                    var clickedTab = tabClickEvent.currentTarget;
                    clickedTab.classList.add("active");
                    tabClickEvent.preventDefault();
                    var myContentPanes = document.querySelectorAll(".data-wrapper__container > div");
                    for (i = 0; i < myContentPanes.length; i++) {
                        myContentPanes[i].classList.remove("is-visible");
                    }
                    var anchorReference = tabClickEvent.target;
                    var activePaneId = anchorReference.getAttribute("href");
                    var activePane = document.querySelector(activePaneId);
                    console.log(activePane);
                    activePane.classList.add("is-visible");
                }
            function myAccordionClicks(accordionClickEvent){
                var clickedTab = accordionClickEvent.currentTarget;
                const isActive = clickedTab.classList.contains('d_active');
                if(isActive){
                    var myContentPanes = document.querySelectorAll(".data-wrapper__container > div");
                    for (var i = 0; i < myAccordion.length; i++) {
                        myAccordion[i].classList.remove("d_active");
                    }
                    for (var y = 0; y < myContentPanes.length; y++) {
                        myContentPanes[y].classList.remove("is-visible");
                    }
                }else{
                    for (var ii = 0; ii < myAccordion.length; ii++) {
                        myAccordion[ii].classList.remove("d_active");
                    }
                   
                    clickedTab.classList.add("d_active");
                
                    accordionClickEvent.preventDefault();
                    var myContentDivs = document.querySelectorAll(".data-wrapper__container > div");
                    for (var yy = 0; yy < myContentDivs.length; yy++) {
                        myContentDivs[yy].classList.remove("is-visible");
                    }
                    var anchorReference = accordionClickEvent.target;
                    var activePaneId = anchorReference.getAttribute("rel");
                   
                    var activePane = document.querySelector(activePaneId);
                    // console.log(activePane);
                    activePane.classList.add("is-visible");
                
                }
            }
                for (var i = 0; i < myTabs.length; i++) {
                    myTabs[i].addEventListener("click", myTabClicks);
                }
                for (var x = 0; x < myAccordion.length; x++) {
                    myAccordion[x].addEventListener("click", myAccordionClicks);
                }

                

            }
        };

    return {
		init: init
	};


}());

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    mindArc.init();
  });