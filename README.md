# linnia-example-policy
This repo contains a made-up example of a policy smart contract used for the Linnia policy based permissions abstraction.

This example, DoNotAllowS3Policy, implements the PermissionPolicyI solidity interface with a checkPolicy method.  The checkPolicy method checks the dataUri parameter and reverts if the dataUri starts with the letters 's3', otherwise true is returned.
This would prevent granting access when the viewer is used amazon aws s3 to store the viewer's copy.  The Policy-based permissions abstraction is demonstrated with this a made-up example.

The following are examples of policies that address non-trivial real-world use cases:

1. A Hippa compliant policy
1. A FIPS compliant policy
1. A GDRP compliant policy
1. A blacklist compliant policy
1. A 'stateful' share at most N times policy

The PermissionPolicyI abstraction is only part of the solution.  The actual creation of many real-world PermissionPolicies
is still an open research question.

Policy-based permissions will provide dApp developers with a powerful tool.  Developers wanted to build domain specific dApps can focus on delivering user-focused design while allowing other experts to build the needed policies.  Expert PermissionPolicyI builders can be incentivized via bounties or direct collaboration.  An exciting part of the PermissionPolicyI abstraction is once a specific PermissionPolicy is created it can be reused by dozens of dApp developers.

Another possible incentive would be a pay-per-use PermissionPolicyI smart contract.  In the pay-per-use case, each application would need to pay with ether or ERC20 tokens for each call to checkPolicy.   Future checkPolicy implementations may leverage all of the regular ethereum tools such as oracles, whitelists, and TRCs.
