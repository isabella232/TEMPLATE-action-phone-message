[[TODO: Summary text that does not duplicate the listing content]]

## Prerequisites

1. An Auth0 account and tenant. [Sign up for free](https://auth0.com/signup).
2. [[TODO: Instructions for creating an account with your service]]

## Set up [[TODO: Your service name]]

To configure the integration with [[TODO: Your service name]]:

[[TODO: Add steps as an ordered list for configuring your service]]

## Add the Auth0 Action

1. Select **Add Integration** (at the top of this page).
1. Read the necessary access requirements, and select **Continue**.
1. Configure the integration using the following fields:
    * [[TODO: Describe all configuration fields]]
    * [[TODO: Describe all secret fields]]
1. Add the integration to your Library by selecting **Create**.
1.  In the modal that appears, select the **Add to flow** link.
1. Drag the Action into the desired location in the flow.
1. Select **Apply Changes**.

## Activate custom SMS factor

To use the SMS factor, your tenant needs to have MFA enabled globally or required for specific contexts using rules. To learn how to enable the MFA feature, see:

- [Enable MFA](https://auth0.com/docs/secure/multi-factor-authentication/enable-mfa)
- [Customize MFA](https://auth0.com/docs/secure/multi-factor-authentication/customize-mfa)

Finally, configure the SMS factor to use the custom code and test the MFA flow.

**Note:** Once you complete the steps below, Auth0 will begin using this factor for MFA during login. Before activating the integration in production, make sure you have configured all components correctly, and [install and verify this Action on a test tenant](https://auth0.com/docs/get-started/auth0-overview/create-tenants/set-up-multiple-environments).

1. Go to **[Dashboard > Security > Multi-factor Auth](https://manage.auth0.com/select-tenant?path=/mfa)**, and select **Phone Message**.
1. In the modal that appears, select **Custom** for the delivery provider, and make your preferred adjustments to the templates. When complete, select **Save** and close the modal.
1. To begin using this factor, enable the SMS factor using the toggle switch.

## Test MFA flow

Trigger an MFA flow and verify that everything works as intended.

## Troubleshoot

If you do not receive the text message, look in the [tenant logs](https://auth0.com/docs/deploy-monitor/logs) for a failed SMS log entry. To learn which event types to search, see the [Log Event Type Code list](https://auth0.com/docs/deploy-monitor/logs/log-event-type-codes), or you can use the Filter control to find MFA errors.

**Make sure that:**

- The Action is in the Send Phone Message flow.
- The secrets match the ones you created in the steps above.
- Your [[TODO: Your service name]] account is active (not suspended).
- Your phone number is formatted using the [E.164 format](https://en.wikipedia.org/wiki/E.164).