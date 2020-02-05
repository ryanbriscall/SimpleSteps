# A simple step-by-step script

A tiny script for changing the step, of &lt;div&gt; `.step` blocks, using keyboard arrow keys.

[View Demo](https://codepen.io/ryanbriscall/pen/JjdPvmy)

For a quick one-time lightweight single-page web app with compatible and portable inline assets.

Simply copy/paste the code into your page.

## Code

1. CSS:
   ```html
   <style>.step{display:none;}.step.active{display:block;}</style>
   ```

1. HTML steps:
   ```html
   <div class="step active">...</div>
   <div class="step">...</div>
   <div class="step">...</div>
   ...
   ```

2. **(Optional)** HTML buttons:

   ```html
   <div style="position: fixed; right: 0.5em; top: 50%; margin-top: -3em">
   <button type="button" style="display: block; min-width: 50px; min-height: 50px;" onclick="changeStep(-1);">⬆️</button>
   <button type="button" style="display: block; min-width: 50px; min-height: 50px;" onclick="changeStep(1);">⬇️</button>
   </div>
   ```

3. HTML javascript:

   ```html
   <script>function changeStep(e){var t=-1;steps.forEach(function(e,n){if(e.classList.contains("active"))return t=n,!1});var n=t+e;n<0?n=steps.length-1:n==steps.length&&(n=0),steps.forEach(function(e,t){if(e.classList.remove("active"),t===n)return e.classList.add("active"),!1})}var steps=document.querySelectorAll(".step");window.addEventListener("keydown",function(e){38==e.keyCode||37==e.keyCode?changeStep(-1):40!=e.keyCode&&39!=e.keyCode||changeStep(1)});</script>
   ```

## Usage

1. Use your keyboard arrow keys ⬆️ and ⬇️, or ⬅️ and ➡️

## Changelog

### 1.0.0

 - Initial release.

## License

Nextstep is licensed under the MIT, see the `LICENSE` file for more details.
