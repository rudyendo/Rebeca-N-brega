# Security Specification - Rebeca Nóbrega Cosméticos

## Data Invariants
- A product must have a name, brand, category, and price.
- Reviews belong to a product and must have a rating (1-5).
- Products can be public (isVisible: true) or private (isVisible: false).
- Only admins can create, update, or delete products.
- Any authenticated user can read public products.
- Any user (even unauthenticated?) can read public products? Usually catalogs are public. I'll allow public reads.

## The Dirty Dozen Payloads (Red Team Test Cases)

1. **Identity Spoofing**: Attempt to create a product as an unauthenticated user.
2. **Identity Spoofing**: Attempt to delete a product as a non-admin authenticated user.
3. **Privilege Escalation**: Attempt to update `isVisible` of a product as a non-admin.
4. **Data Integrity**: Create a product with a negative price.
5. **Data Integrity**: Create a product with a massive name (> 1000 chars).
6. **Data Integrity**: Create a product with missing required fields.
7. **Resource Poisoning**: Use an invalid character string as a productId.
8. **Orphaned Write**: Create a review for a non-existent product.
9. **State Shortcut**: Update a product's price without being the owner/admin.
10. **Denial of Wallet**: Attempt to list products with a recursive query or massive payload.
11. **PII Leak**: Attempt to read user settings if they existed (not in this app yet).
12. **Shadow Field**: Add a `isVerifiedAdmin: true` field to a product doc.

## Test Runner (firestore.rules.test.ts)
I will implement rules that prevent these.
