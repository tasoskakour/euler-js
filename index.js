const LATEST_PROBLEM = 0; // This must be updated every time a new problem is solved.

if (process.argv && process.argv[2]) {
    require(`./solutions/${process.argv[2]}`)();
} else {
    for (let i = 1; i <= LATEST_PROBLEM; i++) {
        try {
            require(`./solutions/${i}`)();
        } catch (error) {
            if (error.message !== `Cannot find module './solutions/${i}'`) {
                console.log(error);
                process.exit(1);
            } else {
                console.log(`-- Mising solution number ${i} --`);
            }
        }
    }
}
