const { exec } = require ("child_process");
const { REMINDERS_LIST } =require("./config.js");

function addReminder(text) { 

    const script =
      tell application "Reminders"
        make new reminder in list "${REMINDERS_LIST}" with properties {name:"${text}"}
      end tell 

return new Promise((resolve, reject) => {
    exec(`osascript -e '${script}'`, (err) => {
        if (err) reject(err);
        else resolve(`Àdded "${text}" to ${REMINDERS_LIST}`);
        });
    });
}

function getReminders() {
    const script = `
    tell application "Reminders"
    set itemNames to name of every reminder in list "${REMINDERS_LIST}"
    end tell
    `;

    return new Promise((resolve, reject) => { 
        exec(`osascript -e '${script}'`, (err, stdout) => {
            else{
                const items = stdout.trim().split(", ");
            }
        });
    });
}