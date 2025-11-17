import {
  AuthorizationContext,
  AuthorizationDecision,
  AuthorizationMetadata,
} from '@loopback/authorization';


export async function roleBasedAuthorization(
  authorizationCtx: AuthorizationContext,
  metadata: AuthorizationMetadata,
): Promise<AuthorizationDecision> {
  // principals come from authentication; first principal is userProfile
  const principals = authorizationCtx.principals as any[];
  const userProfile = principals && principals[0] ? principals[0] : (authorizationCtx.principals as any);
  const userRole = userProfile?.role;


  if (!userRole) return AuthorizationDecision.DENY;


  const allowedRoles = (metadata.allowedRoles ?? []) as string[];
  if (allowedRoles.length === 0) {
    return AuthorizationDecision.ALLOW; // no roles required
  }
  if (allowedRoles.includes(userRole)) return AuthorizationDecision.ALLOW;
  return AuthorizationDecision.DENY;
}
