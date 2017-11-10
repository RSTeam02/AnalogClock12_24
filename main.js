import {Controller} from "./mvc/controller.js";
import {SettingsLS} from "./mvc/settingsLS.js";

window.onload = function() {
    new Controller(new SettingsLS());
}