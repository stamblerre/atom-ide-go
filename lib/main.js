const cp = require("child_process");
const { AutoLanguageClient } = require("atom-languageclient");

class GoLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ['go', 'source.go'];
  }
  getLanguageName() { return 'Go' }
  getServerName() { return 'gopls' }

  startServerProcess(projectPath) {
    const command = atom.config.get('atom-ide-go.command');
    const flags = atom.config.get('atom-ide-go.flags');
    const env = Object.assign({}, process.env);
    const childProcess = cp.spawn(command, flags, {
      cwd: projectPath,
      env: env
    });
    return childProcess;
  }

  activate() {
    super.activate();
  }
}

module.exports = new GoLanguageClient();
