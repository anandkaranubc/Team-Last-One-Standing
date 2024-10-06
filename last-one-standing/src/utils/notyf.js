/**
 * Utility module for creating and configuring Notyf notifications.
 * @module notyf
 */

import { Notyf } from "notyf";

/**
 * The Notyf instance used for creating notifications.
 * @type {Notyf}
 */
const notyf = new Notyf({
    duration: 2500, // You can configure default options here
    position: {
        x: "center",
        y: "top",
    },
});

export default notyf;
