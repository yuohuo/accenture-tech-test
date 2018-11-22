import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import CardDrawer from '../../components/CardDrawer'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    let props = {
        card: {
            coreData: {
                id: "471d4732a9fe198100affbf655e59172",
                number: "INC0000040",
                createdDate: "2017-07-27 03:43:54",
                lastUpdateDate: "2018-03-04 20:47:06",
                type: "INCIDENT",
                state: "On Hold",
                shortDescription: "JavaScript error on hiring page of corporate website",
                application: "",
                assignee: "ITIL User"
            },
            mlData: [],
            continuousML: false,
            automationData: {
                confidenceLevel: 0,
                sourceServiceName: null,
                sourceJobName: null,
                automation: false,
                template: null,
                options: [],
                automationOptionData: null
            },
            editingData: {
                "editingUsers": null,
                "editing": false
            },
            "serviceData": {
                made_sla: "false",
                caused_by: "",
                parent: "",
                watch_list: "",
                upon_reject: "null",
                child_incidents: "",
                hold_reason: "Awaiting Caller",
                approval_history: "",
                resolved_by: "",
                sys_updated_by: "admin",
                opened_by: "System Administrator",
                user_input: "",
                sys_created_on: "2017-07-27 03:43:54",
                sys_domain: "global",
                state: "On Hold",
                sys_created_by: "admin",
                knowledge: "false",
                order: "",
                calendar_stc: "",
                closed_at: "",
                cmdb_ci: "WEBSERVER",
                delivery_plan: "",
                impact: "2 - High",
                active: "true",
                work_notes_list: "",
                business_service: "",
                priority: "3 - Moderate",
                sys_domain_path: "/",
                rfc: "",
                time_worked: "",
                expected_start: "",
                opened_at: "2017-07-27 03:42:45",
                business_duration: "",
                group_list: "",
                work_end: "",
                caller_id: "Bud Richman",
                resolved_at: "",
                approval_set: "",
                subcategory: "null",
                work_notes: "",
                close_code: "null",
                correlation_display: "",
                delivery_task: "",
                work_start: "",
                assignment_group: "",
                additional_assignee_list: "",
                business_stc: "",
                description: "Seeing JavaScript error message on hiring page on Explorer and Firefox.",
                calendar_duration: "",
                close_notes: "",
                notify: "Do Not Notify",
                sys_class_name: "Incident",
                closed_by: "",
                follow_up: "",
                parent_incident: "",
                contact_type: "Phone",
                urgency: "2 - High",
                problem_id: "",
                company: "ACME North America",
                reassignment_count: "1",
                activity_due: "UNKNOWN",
                severity: "3 - Low",
                comments: "2018-03-28 19:38:30 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-28 19:01:14 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-28 06:40:52 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-28 03:13:24 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-04 20:47:06 - System Administrator (Additional comments)\n2018-01-15 21:10:44 - System Administrator (Additional comments)\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n\n\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n\n\n2018-01-15 21:10:44 - System Administrator (Additional comments)\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n\n\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n",
                approval: "Not Yet Requested",
                sla_due: "UNKNOWN",
                comments_and_work_notes: "2018-03-28 19:38:30 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-28 19:01:14 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-28 06:40:52 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-28 03:13:24 - System Administrator (*Unknown)\nAutomation triggerred rundeck job id :05045801-e241-419b-8095-5a046415e2ac\n\n2018-03-04 20:47:06 - System Administrator (Additional comments)\n2018-01-15 21:10:44 - System Administrator (Additional comments)\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n\n\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n\n\n2018-01-15 21:10:44 - System Administrator (Additional comments)\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n\n\n2017-10-18 16:12:43 - System Administrator (Additional comments)\nAdded an attachment\n\n2017-07-27 17:43:54 - System Administrator (Additional comments)\nJavaScript error (line 202) on the home page. Not sure what is\n\t\t\tgoing on, does not happen on my Windows machine!\n\t\t\n\n",
                due_date: "",
                sys_mod_count: "7",
                reopen_count: "",
                sys_tags: "",
                escalation: "Normal",
                upon_approval: "null",
                location: "1050 Sunnyview Road Northeast, Salem,OR",
                category: "Inquiry / Help"
            },
            slaData: [
                {
                    id: "6ed8c106d732220035ae23c7ce6103be",
                    lastUpdateDate: "2017-10-25 06:10:22",
                    pause_duration: "",
                    pause_time: "2017-07-25 17:43:54",
                    timezone: "Europe/London",
                    business_time_left: "1 Day",
                    duration: "0 Seconds",
                    time_left: "2 Days 12 Hours 16 Minutes",
                    sys_updated_by: "admin",
                    sys_created_on: "2017-10-25 06:10:22",
                    percentage: "0",
                    original_breach_time: "2017-07-28 06:00:00",
                    sys_created_by: "admin",
                    business_percentage: "0",
                    end_time: "",
                    sys_mod_count: "1",
                    active: "true",
                    business_pause_duration: "",
                    sla: "Priority 3 resolution (1 day)",
                    sys_tags: "",
                    schedule: "8-5 weekdays",
                    start_time: "2017-07-25 17:43:54",
                    business_duration: "0 Seconds",
                    task: "INC0000040",
                    stage: "Paused",
                    planned_end_time: "2017-07-28 06:00:00",
                    has_breached: "false"
                }
            ]
        },
        toggleCard: jest.fn()
    }
    const enzymeWrapper = mount(<CardDrawer {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components 2', () => {
    describe('Component Card', () => {

        const { enzymeWrapper } = setup()

        it('allows us to set props', () => {
            expect(enzymeWrapper.props().card.coreData.number).toBe('INC0000040');
        })

        it('should render page indicator and buttons correctly', () => {
            expect(enzymeWrapper.find('h1').at(0).text()).toBe('INC0000040')
            expect(enzymeWrapper.exists('button')).toEqual(true);
            expect(enzymeWrapper.find('button')).toHaveLength(1);
        })
        it('should call toggleCard to close drawer when click close button', () => {
            enzymeWrapper.find('button').at(0).simulate('click');
            expect(enzymeWrapper.props().toggleCard).toHaveBeenCalledWith(null);
          });
    })
})

