import {
	computeAccessibleName,
	computeAccessibleDescription,
} from "dom-accessibility-api";

const customButtonWithDefault1 = document.querySelectorAll('custom-button-with-default')[0];
const customButtonWithDefault2 = document.querySelectorAll('custom-button-with-default')[1];

const customButtonWithDefaultName1 = computeAccessibleName(customButtonWithDefault1.shadowRoot.querySelector('button'));
const customButtonWithDefaultName2 = computeAccessibleName(customButtonWithDefault2.shadowRoot.querySelector('button'))



document.querySelector('#first-with-default').textContent = customButtonWithDefaultName1;
document.querySelector('#second-with-default').textContent = customButtonWithDefaultName2;
document.querySelector('pre.template').textContent = document.querySelector('#button-template').innerHTML.trim();
document.querySelector('pre.template-with-default').textContent = document.querySelector('#button-template-with-default').innerHTML.trim();