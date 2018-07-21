// IMPORTANT, Do not hurt the next line. It's configured from solved.sh 
const LATEST_PROBLEM = 3;

const main = () => {
    if (process.argv && process.argv[2]) {
        resultWrapper(process.argv[2], `./solutions/${process.argv[2]}`);
    } else {
        for (let i = 1; i <= LATEST_PROBLEM; i++) {
            try {
                resultWrapper(i, `./solutions/${i}`);
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
}

const resultWrapper = (i, path) => {
    let t1 = Date.now();
    let sol = require(path)();
    let t2 = Date.now();
    console.log(`~ Solution for problem ${i} is: ${sol} (${((t2 - t1) / 1000).toFixed(6)}s)`);
}

main();