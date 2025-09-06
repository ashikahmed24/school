<script setup>
import IconAcademic from "@/components/icons/IconAcademic.vue";
import IconApplication from "@/components/icons/IconApplication.vue";
import IconChevronRight from "@/components/icons/IconChevronRight.vue";
import IconGroups from "@/components/icons/IconGroups.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconInfo from "@/components/icons/IconInfo.vue";
import IconPersonCheck from "@/components/icons/IconPersonCheck.vue";
import IconSubject from "@/components/icons/IconSubject.vue";
import IconSupport from "@/components/icons/IconSupport.vue";
import IconTeacher from "@/components/icons/IconTeacher.vue";
import { ref } from "vue";

const openMenus = ref({});

const toggleMenu = (menu) => {
    openMenus.value[menu] = !openMenus.value[menu];
};
</script>

<template>
    <aside
        :class="['sidebar scrollbar fixed inset-y-0 left-0 w-60 bg-white shadow-md transform transition-transform duration-300 z-30', openSidebar ? 'translate-x-0' : '-translate-x-full', 'md:translate-x-0 md:static md:shadow-none']">
        <ul class="menu">

            <!-- ================= MAIN ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Main</h6>
                <ul class="menu__list">

                    <!-- Dashboard -->
                    <li class="menu__item">
                        <button @click="toggleMenu('dashboard')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Dashboard</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.dashboard" class="menu__submenu">
                            <li><a href="#" class="menu__link">Admin Dashboard</a></li>
                            <li><a href="#" class="menu__link">Teacher Dashboard</a></li>
                            <li><a href="#" class="menu__link">Student Dashboard</a></li>
                            <li><a href="#" class="menu__link">Parent Dashboard</a></li>
                        </ul>
                    </li>

                    <!-- Application -->
                    <li class="menu__item">
                        <button @click="toggleMenu('application')" class="menu__button">
                            <span class="menu__button__label">
                                <IconApplication class="size-5" />
                                <span>Application</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.application" class="menu__submenu">
                            <li><a href="#" class="menu__link">Calendar</a></li>
                            <li><a href="#" class="menu__link">Email</a></li>
                            <li><a href="#" class="menu__link">File Manager</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= PEOPLES ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Peoples</h6>
                <ul class="menu__list">
                    <!-- Students -->
                    <li class="menu__item">
                        <button @click="toggleMenu('students')" class="menu__button">
                            <span class="menu__button__label">
                                <IconAcademic class="size-5" />
                                <span>Students</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.students" class="menu__submenu">
                            <li><a href="#" class="menu__link">All Students</a></li>
                            <li><a href="#" class="menu__link">Student List</a></li>
                            <li><a href="#" class="menu__link">Student Details</a></li>
                            <li><a href="#" class="menu__link">Student Promotion</a></li>
                        </ul>
                    </li>
                    <!-- Parents -->
                    <li class="menu__item">
                        <button @click="toggleMenu('parents')" class="menu__button">
                            <span class="menu__button__label">
                                <IconPersonCheck class="size-5" />
                                <span>Parents</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.parents" class="menu__submenu">
                            <li><a href="#" class="menu__link">All Parents</a></li>
                            <li><a href="#" class="menu__link">Parent List</a></li>
                        </ul>
                    </li>
                    <!-- Guardians -->
                    <li class="menu__item">
                        <button @click="toggleMenu('guardians')" class="menu__button">
                            <span class="menu__button__label">
                                <IconAcademic class="size-5" />
                                <span>Guardians</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.guardians" class="menu__submenu">
                            <li><a href="#" class="menu__link">All Guardians</a></li>
                            <li><a href="#" class="menu__link">Guardian List</a></li>
                        </ul>
                    </li>
                    <!-- Teachers -->
                    <li class="menu__item">
                        <button @click="toggleMenu('teachers')" class="menu__button">
                            <span class="menu__button__label">
                                <IconTeacher class="size-5" />
                                <span>Teachers</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.teachers" class="menu__submenu">
                            <li><a href="#" class="menu__link">All Teachers</a></li>
                            <li><a href="#" class="menu__link">Teacher List</a></li>
                            <li><a href="#" class="menu__link">Teacher Details</a></li>
                            <li><a href="#" class="menu__link">Routine</a></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= ACADEMIC ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Academic</h6>
                <ul class="menu__list">
                    <li class="menu__item">
                        <button @click="toggleMenu('classes')" class="menu__button">
                            <span class="menu__button__label">
                                <IconSubject class="size-5" />
                                <span>Classes</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.classes" class="menu__submenu">
                            <li><a href="#" class="menu__link">All Classes</a></li>
                            <li><a href="#" class="menu__link">Schedule</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Class Room -->
                    <li class="menu__item">
                        <a href="class-room.html" class="menu__link no-before">
                            <IconSubject class="size-5" />
                            <span>Class Room</span>
                        </a>
                    </li>

                    <!-- Class Routine -->
                    <li class="menu__item">
                        <a href="class-routine.html" class="menu__link no-before">
                            <IconSubject class="size-5" />
                            <span>Class Routine</span>
                        </a>
                    </li>

                    <!-- Section -->
                    <li class="menu__item">
                        <a href="class-section.html" class="menu__link no-before">
                            <IconSubject class="size-5" />
                            <span>Section</span>
                        </a>
                    </li>

                    <!-- Subject -->
                    <li class="menu__item">
                        <a href="class-subject.html" class="menu__link no-before">
                            <IconSubject class="size-5" />
                            <span>Subject</span>
                        </a>
                    </li>

                    <!-- Syllabus -->
                    <li class="menu__item">
                        <a href="class-syllabus.html" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Syllabus</span>
                        </a>
                    </li>

                    <!-- Time Table -->
                    <li class="menu__item">
                        <a href="class-time-table.html" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Time Table</span>
                        </a>
                    </li>

                    <!-- Home Work -->
                    <li class="menu__item">
                        <a href="class-home-work.html" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Home Work</span>
                        </a>
                    </li>

                    <!-- Examinations -->
                    <li class="menu__item">
                        <button @click="toggleMenu('examinations')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Examinations</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.examinations" class="menu__submenu">
                            <li><a href="#" class="menu__link">Exam</a></li>
                            <li><a href="#" class="menu__link">Exam Schedule</a></li>
                            <li><a href="#" class="menu__link">Grade</a></li>
                            <li><a href="#" class="menu__link">Exam Attendance</a></li>
                            <li><a href="#" class="menu__link">Exam Results</a></li>
                        </ul>
                    </li>

                    <!-- Reasons -->
                    <li class="menu__item">
                        <a href="academic-reasons.html" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Reasons</span>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- ================= MANAGEMENT ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Management</h6>
                <ul class="menu__list">

                    <!-- Library -->
                    <li class="menu__item">
                        <button @click="toggleMenu('library')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Library</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.library" class="menu__submenu">
                            <li><a href="#" class="menu__link">Library Members</a></li>
                            <li><a href="#" class="menu__link">Books</a></li>
                            <li><a href="#" class="menu__link">Issue Book</a></li>
                            <li><a href="#" class="menu__link">Return</a></li>
                        </ul>
                    </li>

                    <!-- Sports -->
                    <li class="menu__item">
                        <a href="sports.html" class="menu__link no-before">
                            <IconApplication class="size-5" />
                            <span>Sports</span>
                        </a>
                    </li>

                    <!-- Players -->
                    <li class="menu__item">
                        <a href="players.html" class="menu__link no-before">
                            <IconApplication class="size-5" />
                            <span>Players</span>
                        </a>
                    </li>

                    <!-- Hostel -->
                    <li class="menu__item">
                        <button @click="toggleMenu('hostel')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Hostel</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.hostel" class="menu__submenu">
                            <li><a href="#" class="menu__link">Hostel List</a></li>
                            <li><a href="#" class="menu__link">Hostel Rooms</a></li>
                            <li><a href="#" class="menu__link">Room Type</a></li>
                        </ul>
                    </li>

                    <!-- Transport -->
                    <li class="menu__item">
                        <button @click="toggleMenu('transport')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Transport</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.transport" class="menu__submenu">
                            <li><a href="#" class="menu__link">Routes</a></li>
                            <li><a href="#" class="menu__link">Pickup Points</a></li>
                            <li><a href="#" class="menu__link">Vehicle Drivers</a></li>
                            <li><a href="#" class="menu__link">Vehicle</a></li>
                            <li><a href="#" class="menu__link">Assign Vehicle</a></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= HRM ================= -->
            <li class="menu__section">
                <h6 class="menu__title">HRM</h6>
                <ul class="menu__list">

                    <!-- Staffs -->
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Staffs</span>
                        </a>
                    </li>

                    <!-- Departments -->
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Departments</span>
                        </a>
                    </li>

                    <!-- Designation -->
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Designation</span>
                        </a>
                    </li>

                    <!-- Attendance -->
                    <li class="menu__item">
                        <button @click="toggleMenu('attendance')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Attendance</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.attendance" class="menu__submenu">
                            <li><a href="#" class="menu__link">Student Attendance</a></li>
                            <li><a href="#" class="menu__link">Teacher Attendance</a></li>
                            <li><a href="#" class="menu__link">Staff Attendance</a></li>
                        </ul>
                    </li>

                    <!-- Leaves -->
                    <li class="menu__item">
                        <button @click="toggleMenu('leaves')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Leaves</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.leaves" class="menu__submenu">
                            <li><a href="#" class="menu__link">List of Leaves</a></li>
                            <li><a href="#" class="menu__link">Approve Request</a></li>
                        </ul>
                    </li>

                    <!-- Holidays -->
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Holidays</span>
                        </a>
                    </li>

                    <!-- Payroll -->
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Payroll</span>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- ================= FINANCE ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Finance &amp; Accounts</h6>
                <ul class="menu__list">

                    <!-- Fees Collection -->
                    <li class="menu__item">
                        <button @click="toggleMenu('fees')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Fees Collection</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.fees" class="menu__submenu">
                            <li><a href="#" class="menu__link">Fees Group</a></li>
                            <li><a href="#" class="menu__link">Fees Type</a></li>
                            <li><a href="#" class="menu__link">Fees Master</a></li>
                            <li><a href="#" class="menu__link">Fees Assign</a></li>
                            <li><a href="#" class="menu__link">Collect Fees</a></li>
                            <li><a href="#" class="menu__link">Fees Report</a></li>
                            <li><a href="#" class="menu__link">Due Fees</a></li>
                        </ul>
                    </li>

                    <!-- Accounts -->
                    <li class="menu__item">
                        <button @click="toggleMenu('accounts')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Accounts</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.accounts" class="menu__submenu">
                            <li><a href="#" class="menu__link">Expenses</a></li>
                            <li><a href="#" class="menu__link">Expense Category</a></li>
                            <li><a href="#" class="menu__link">Income</a></li>
                            <li><a href="#" class="menu__link">Invoices</a></li>
                            <li><a href="#" class="menu__link">Invoice View</a></li>
                            <li><a href="#" class="menu__link">Transactions</a></li>
                        </ul>
                    </li>

                    <!-- Balance Sheet -->
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Balance Sheet</span>
                        </a>
                    </li>

                    <!-- Reports -->
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Reports</span>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- ================= ANNOUNCEMENTS ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Announcements</h6>
                <ul class="menu__item">
                    <li>
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Notice</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>News</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="menu__link no-before">
                            <IconHome class="size-5" />
                            <span>Circular</span>
                        </a>
                    </li>
                </ul>
            </li>


            <!-- ================= USER MANAGEMENT ================= -->
            <li class="menu__section">
                <h6 class="menu__title">User Management</h6>
                <ul class="menu__list">
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconGroups class="size-5" />
                            <span>Users</span>
                        </a>
                    </li>

                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconApplication class="size-5" />
                            <span>Roles &amp; Permissions</span>
                        </a>
                    </li>

                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconApplication class="size-5" />
                            <span>Delete Account Request</span>
                        </a>
                    </li>

                </ul>
            </li>


            <!-- ================= SUPPORT ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Support</h6>
                <ul class="menu__list">
                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconApplication class="size-5" />
                            <span>Contact Messages</span>
                        </a>
                    </li>

                    <li class="menu__item">
                        <a href="#" class="menu__link no-before">
                            <IconApplication class="size-5" />
                            <span>Tickets</span>
                        </a>
                    </li>
                </ul>
            </li>


            <!-- ================= SETTINGS ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Settings</h6>
                <ul class="menu__list">

                    <!-- General Settings -->
                    <li class="menu__item">
                        <button @click="toggleMenu('generalSettings')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>General Settings</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.generalSettings" class="menu__submenu">
                            <li><a href="#" class="menu__link">Profile Settings</a></li>
                            <li><a href="#" class="menu__link">Security Settings</a></li>
                            <li><a href="#" class="menu__link">Notifications Settings</a></li>
                            <li><a href="#" class="menu__link">Storage</a></li>
                            <li><a href="#" class="menu__link">Ban IP Address</a></li>
                        </ul>
                    </li>

                    <!-- Website Settings -->
                    <li class="menu__item">
                        <button @click="toggleMenu('websiteSettings')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Website Settings</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.websiteSettings" class="menu__submenu">
                            <li><a href="#" class="menu__link">Academic Settings</a></li>
                            <li><a href="#" class="menu__link">Localization</a></li>
                            <li><a href="#" class="menu__link">Prefixes</a></li>
                            <li><a href="#" class="menu__link">Preferences</a></li>
                        </ul>
                    </li>


                    <!-- System Settings -->
                    <li class="menu__item">
                        <button @click="toggleMenu('systemSettings')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>System Settings</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.systemSettings" class="menu__submenu">
                            <li><a href="#" class="menu__link">Email Settings</a></li>
                            <li><a href="#" class="menu__link">Email Templates</a></li>
                            <li><a href="#" class="menu__link">SMS Settings</a></li>
                            <li><a href="#" class="menu__link">OTP</a></li>
                            <li><a href="#" class="menu__link">GDPR Cookies</a></li>
                        </ul>
                    </li>

                    <!-- Financial Settings -->
                    <li class="menu__item">
                        <button @click="toggleMenu('financialSettings')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Financial Settings</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.financialSettings" class="menu__submenu">
                            <li><a href="#" class="menu__link">Payment Gateways</a></li>
                            <li><a href="#" class="menu__link">Tax Rates</a></li>
                        </ul>
                    </li>

                    <!-- Academic Settings -->
                    <li class="menu__item">
                        <button @click="toggleMenu('academicSettings')" class="menu__button">
                            <span class="menu__button__label">
                                <IconHome class="size-5" />
                                <span>Academic Settings</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.academicSettings" class="menu__submenu">
                            <li><a href="#" class="menu__link">School Settings</a></li>
                            <li><a href="#" class="menu__link">Religion</a></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= Help Center ================= -->
            <li class="menu__section">
                <h6 class="menu__title">Help Center</h6>
                <ul class="menu__list">

                    <!-- Documentation -->
                    <li class="menu__item">
                        <a href="documentation.html" class="menu__link no-before">
                            <IconInfo class="size-5" />
                            <span>Documentation</span>
                        </a>
                    </li>

                    <!-- Contact Support -->
                    <li class="menu__item">
                        <a href="support.html" class="menu__link no-before">
                            <IconSupport class="size-5" />
                            <span>Contact Support</span>
                        </a>
                    </li>

                </ul>
            </li>


        </ul>
    </aside>
</template>


<style scoped></style>