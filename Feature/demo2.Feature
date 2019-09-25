Feature: Login Action

	Scenario Outline: Successful Login with Valid Credentials
		Given User opens the application
		When user click on signin link
		When user enters "<username>" as a username and "<password>"	
		Then Message displayed login successfully
		
	Examples:
		| username | password    |
		| lalitha  | password123 |
		| admin    | password456 |
		| Lalitha  | Password123 |