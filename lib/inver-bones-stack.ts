import * as cdk from '@aws-cdk/core';
import * as amplify from "@aws-cdk/aws-amplify";

export class InverBonesStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const amplifyApp = new amplify.App(this, "inver", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "bettercallshao",
        repository: "inver",
        oauthToken: cdk.SecretValue.secretsManager("inver-bones", {
          jsonField: "github",
        }),
      }),
    });
    const mainBranch = amplifyApp.addBranch("main");
  }
}
