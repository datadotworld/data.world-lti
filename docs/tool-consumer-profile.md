```$json
{  
   "lti_version":"LTI-2p0",
   "guid":"339b6700-e4cb-47c5-a54f-3ee0064921a9",
   "capability_offered":[  
      "basic-lti-launch-request",
      "ToolProxyRegistrationRequest",
      "Canvas.placements.accountNavigation",
      "Canvas.placements.courseNavigation",
      "Canvas.placements.assignmentSelection",
      "Canvas.placements.linkSelection",
      "Canvas.placements.postGrades",
      "Security.splitSecret",
      "Context.sourcedId",
      "Context.title",
      "com.instructure.PostMessageToken",
      "com.instructure.Assignment.lti.id",
      "com.instructure.OriginalityReport.id",
      "com.instructure.Submission.id",
      "com.instructure.File.id",
      "CourseOffering.sourcedId",
      "Context.id",
      "Context.sourcedId",
      "Message.documentTarget",
      "Message.locale",
      "ToolConsumerInstance.guid",
      "Canvas.api.domain",
      "Canvas.api.collaborationMembers.url",
      "Canvas.api.baseUrl",
      "ToolProxyBinding.memberships.url",
      "Canvas.account.id",
      "Canvas.account.name",
      "Canvas.account.sisSourceId",
      "Canvas.rootAccount.id",
      "Canvas.rootAccount.sisSourceId",
      "Canvas.externalTool.url",
      "com.instructure.brandConfigJSON.url",
      "com.instructure.brandConfigJS.url",
      "Canvas.css.common",
      "Canvas.shard.id",
      "Canvas.root_account.global_id",
      "Canvas.root_account.id",
      "vnd.Canvas.root_account.uuid",
      "Canvas.root_account.sisSourceId",
      "Canvas.course.id",
      "vnd.instructure.Course.uuid",
      "Canvas.course.name",
      "Canvas.course.sisSourceId",
      "Canvas.course.startAt",
      "Canvas.course.workflowState",
      "Canvas.term.startAt",
      "CourseSection.sourcedId",
      "Canvas.enrollment.enrollmentState",
      "Canvas.membership.roles",
      "Canvas.membership.concludedRoles",
      "Canvas.course.previousContextIds",
      "Canvas.course.previousCourseIds",
      "Person.name.full",
      "Person.name.family",
      "Person.name.given",
      "Person.email.primary",
      "vnd.Canvas.Person.email.sis",
      "Person.address.timezone",
      "User.image",
      "User.id",
      "Canvas.user.id",
      "vnd.instructure.User.uuid",
      "Canvas.user.prefersHighContrast",
      "Canvas.group.contextIds",
      "Membership.role",
      "Canvas.xuser.allRoles",
      "Canvas.user.globalId",
      "Canvas.user.isRootAccountAdmin",
      "User.username",
      "Canvas.user.loginId",
      "Canvas.user.sisSourceId",
      "Canvas.user.sisIntegrationId",
      "Person.sourcedId",
      "Canvas.logoutService.url",
      "Canvas.masqueradingUser.id",
      "Canvas.masqueradingUser.userId",
      "Canvas.xapi.url",
      "Caliper.url",
      "Canvas.course.sectionIds",
      "Canvas.course.sectionSisSourceIds",
      "com.instructure.contextLabel",
      "Canvas.module.id",
      "Canvas.moduleItem.id",
      "Canvas.assignment.id",
      "Canvas.assignment.title",
      "Canvas.assignment.pointsPossible",
      "Canvas.assignment.unlockAt",
      "Canvas.assignment.lockAt",
      "Canvas.assignment.dueAt",
      "Canvas.assignment.unlockAt.iso8601",
      "Canvas.assignment.lockAt.iso8601",
      "Canvas.assignment.dueAt.iso8601",
      "Canvas.assignment.published",
      "LtiLink.custom.url",
      "ToolProxyBinding.custom.url",
      "ToolProxy.custom.url",
      "ToolConsumerProfile.url",
      "vnd.Canvas.OriginalityReport.url",
      "vnd.Canvas.submission.url",
      "vnd.Canvas.submission.history.url",
      "Canvas.file.media.id",
      "Canvas.file.media.type",
      "Canvas.file.media.duration",
      "Canvas.file.media.size",
      "Canvas.file.media.title",
      "Canvas.file.usageRights.name",
      "Canvas.file.usageRights.url",
      "Canvas.file.usageRights.copyrightText"
   ],
   "security_profile":[  
      {  
         "security_profile_name":"lti_oauth_hash_message_security",
         "digest_algorithm":[  
            "HMAC-SHA1"
         ]
      },
      {  
         "security_profile_name":"oauth2_access_token_ws_security"
      },
      {  
         "security_profile_name":"lti_jwt_ws_security",
         "digest_algorithm":[  
            "HS256"
         ]
      },
      {  
         "security_profile_name":"lti_jwt_message_security",
         "digest_algorithm":[  
            "HS256"
         ]
      }
   ],
   "product_instance":{  
      "guid":"L98WYwv4ntOCmCECGk6FjOhHcNq401VWl97LzNMu:canvas-lms",
      "product_info":{  
         "product_version":"none",
         "product_family":{  
            "code":"canvas",
            "vendor":{  
               "code":"https://instructure.com",
               "vendor_name":{  
                  "default_value":"Instructure",
                  "key":"vendor.name"
               },
               "timestamp":"2008-03-27T06:00:00Z"
            }
         },
         "product_name":{  
            "default_value":"Canvas by Instructure",
            "key":"product.name"
         }
      },
      "service_owner":{  
         "description":{  
            "default_value":"Site Admin",
            "key":"service_owner.description"
         },
         "service_owner_name":{  
            "default_value":"Site Admin",
            "key":"service_owner.name"
         }
      }
   },
   "service_offered":[  
      {  
         "endpoint":"https://canvas.maxwelllincoln.com/api/lti/accounts/2/tool_proxy",
         "format":[  
            "application/vnd.ims.lti.v2.toolproxy+json"
         ],
         "action":[  
            "POST"
         ],
         "@id":"https://canvas.maxwelllincoln.com/api/lti/accounts/site_admin/tool_consumer_profile/339b6700-e4cb-47c5-a54f-3ee0064921a9#ToolProxy.collection",
         "@type":"RestService"
      },
      {  
         "endpoint":"https://canvas.maxwelllincoln.com/api/lti/tool_proxy/{tool_proxy_guid}",
         "format":[  
            "application/vnd.ims.lti.v2.toolproxy+json"
         ],
         "action":[  
            "GET"
         ],
         "@id":"https://canvas.maxwelllincoln.com/api/lti/accounts/site_admin/tool_consumer_profile/339b6700-e4cb-47c5-a54f-3ee0064921a9#ToolProxy.item",
         "@type":"RestService"
      },
      {  
         "endpoint":"https://canvas.maxwelllincoln.com/api/lti/accounts/2/authorize",
         "format":[  
            "application/json"
         ],
         "action":[  
            "POST"
         ],
         "@id":"https://canvas.maxwelllincoln.com/api/lti/accounts/site_admin/tool_consumer_profile/339b6700-e4cb-47c5-a54f-3ee0064921a9#vnd.Canvas.authorization",
         "@type":"RestService"
      },
      {  
         "endpoint":"https://canvas.maxwelllincoln.com/api/lti/tool_settings/tool_proxy/{tool_proxy_id}",
         "format":[  
            "application/vnd.ims.lti.v2.toolsettings+json",
            "application/vnd.ims.lti.v2.toolsettings.simple+json"
         ],
         "action":[  
            "GET",
            "PUT"
         ],
         "@id":"https://canvas.maxwelllincoln.com/api/lti/accounts/site_admin/tool_consumer_profile/339b6700-e4cb-47c5-a54f-3ee0064921a9#ToolProxySettings",
         "@type":"RestService"
      },
      {  
         "endpoint":"https://canvas.maxwelllincoln.com/api/lti/tool_settings/bindings/{binding_id}",
         "format":[  
            "application/vnd.ims.lti.v2.toolsettings+json'",
            "application/vnd.ims.lti.v2.toolsettings.simple+json"
         ],
         "action":[  
            "GET",
            "PUT"
         ],
         "@id":"https://canvas.maxwelllincoln.com/api/lti/accounts/site_admin/tool_consumer_profile/339b6700-e4cb-47c5-a54f-3ee0064921a9#ToolProxyBindingSettings",
         "@type":"RestService"
      },
      {  
         "endpoint":"https://canvas.maxwelllincoln.com/api/lti/tool_settings/links/{tool_proxy_id}",
         "format":[  
            "application/vnd.ims.lti.v2.toolsettings+json",
            "application/vnd.ims.lti.v2.toolsettings.simple+json"
         ],
         "action":[  
            "GET",
            "PUT"
         ],
         "@id":"https://canvas.maxwelllincoln.com/api/lti/accounts/site_admin/tool_consumer_profile/339b6700-e4cb-47c5-a54f-3ee0064921a9#LtiLinkSettings",
         "@type":"RestService"
      }
   ],
   "@id":"https://canvas.maxwelllincoln.com/api/lti/accounts/site_admin/tool_consumer_profile/339b6700-e4cb-47c5-a54f-3ee0064921a9",
   "@type":"ToolConsumerProfile",
   "@context":[  
      "http://purl.imsglobal.org/ctx/lti/v2/ToolConsumerProfile"
   ]
}
```