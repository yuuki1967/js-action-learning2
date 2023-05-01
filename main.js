const exec = require('@actions/exec');

async function run(){
  try {
    await exec.exec('tree');
  } catch (error) {
    console.log(error);
  }
}

run();
