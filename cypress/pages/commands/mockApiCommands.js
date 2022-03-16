

export const MockingApiForFailureCase = (Method,ApiSignature) => {
    cy.intercept(Method,ApiSignature)
        {
            statusCode: 403
        }
}
