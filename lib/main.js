const { AutoLanguageClient } = require("atom-languageclient");

class GoLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ['go', 'source.go'];
  }
  getLanguageName() { return 'Go' }
  getServerName() { return 'gopls' }

  activate() {
    super.activate();
  }
}

module.exports = new GoLanguageClient();
