<script setup>
import IconChevronRight from "@/components/icons/IconChevronRight.vue";
import IconHome from "@/components/icons/IconHome.vue";
import { ref } from "vue";

const openMenus = ref({});

const toggleMenu = (menu) => {
    openMenus.value[menu] = !openMenus.value[menu];
};
</script>

<template>
    <aside class="w-60 h-screen shadow-md overflow-y-auto scrollbar p-4">
        <ul class="space-y-6 text-sm font-medium text-gray-700">

            <!-- ================= MAIN ================= -->
            <li>
                <h6 class="text-xs font-semibold uppercase text-gray-400 px-2 mb-2">Main</h6>
                <ul class="space-y-1">

                    <!-- Dashboard -->
                    <li>
                        <button @click="toggleMenu('dashboard')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <IconHome class="size-5" />
                                <span>Dashboard</span>
                            </span>
                            <IconChevronRight class="size-4" />
                        </button>
                        <ul v-show="openMenus.dashboard" class="ml-6 mt-1 space-y-1">
                            <li><a href="index.html" class="block px-3 py-2 hover:bg-gray-100">Admin Dashboard</a></li>
                            <li><a href="teacher-dashboard.html" class="block px-3 py-2 hover:bg-gray-100">Teacher
                                    Dashboard</a></li>
                            <li><a href="student-dashboard.html" class="block px-3 py-2 hover:bg-gray-100">Student
                                    Dashboard</a></li>
                            <li><a href="parent-dashboard.html" class="block px-3 py-2 hover:bg-gray-100">Parent
                                    Dashboard</a></li>
                        </ul>
                    </li>

                    <!-- Application -->
                    <li>
                        <button @click="toggleMenu('application')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2"><i
                                    class="ti ti-layout-list"></i><span>Application</span></span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.application" class="ml-6 mt-1 space-y-1">
                            <li><a href="chat.html" class="block px-3 py-2 hover:bg-gray-100">Chat</a></li>
                            <li><a href="calendar.html" class="block px-3 py-2 hover:bg-gray-100">Calendar</a></li>
                            <li><a href="email.html" class="block px-3 py-2 hover:bg-gray-100">Email</a></li>
                            <li><a href="file-manager.html" class="block px-3 py-2 hover:bg-gray-100">File Manager</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= PEOPLES ================= -->
            <li>
                <h6 class="text-xs font-semibold uppercase text-gray-400 px-2 mb-2">Peoples</h6>
                <ul class="space-y-1">
                    <!-- Students -->
                    <li>
                        <button @click="toggleMenu('students')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2"><i
                                    class="ti ti-school"></i><span>Students</span></span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.students" class="ml-6 mt-1 space-y-1">
                            <li><a href="student-grid.html" class="block px-3 py-2 hover:bg-gray-100">All Students</a>
                            </li>
                            <li><a href="students.html" class="block px-3 py-2 hover:bg-gray-100">Student List</a></li>
                            <li><a href="student-details.html" class="block px-3 py-2 hover:bg-gray-100">Student
                                    Details</a></li>
                            <li><a href="student-promotion.html" class="block px-3 py-2 hover:bg-gray-100">Student
                                    Promotion</a></li>
                        </ul>
                    </li>
                    <!-- Parents -->
                    <li>
                        <button @click="toggleMenu('parents')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2"><i
                                    class="ti ti-user-bolt"></i><span>Parents</span></span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.parents" class="ml-6 mt-1 space-y-1">
                            <li><a href="parent-grid.html" class="block px-3 py-2 hover:bg-gray-100">All Parents</a>
                            </li>
                            <li><a href="parents.html" class="block px-3 py-2 hover:bg-gray-100">Parent List</a></li>
                        </ul>
                    </li>
                    <!-- Guardians -->
                    <li>
                        <button @click="toggleMenu('guardians')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2"><i
                                    class="ti ti-user-shield"></i><span>Guardians</span></span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.guardians" class="ml-6 mt-1 space-y-1">
                            <li><a href="guardian-grid.html" class="block px-3 py-2 hover:bg-gray-100">All Guardians</a>
                            </li>
                            <li><a href="guardians.html" class="block px-3 py-2 hover:bg-gray-100">Guardian List</a>
                            </li>
                        </ul>
                    </li>
                    <!-- Teachers -->
                    <li>
                        <button @click="toggleMenu('teachers')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2"><i
                                    class="ti ti-users"></i><span>Teachers</span></span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.teachers" class="ml-6 mt-1 space-y-1">
                            <li><a href="teacher-grid.html" class="block px-3 py-2 hover:bg-gray-100">All Teachers</a>
                            </li>
                            <li><a href="teachers.html" class="block px-3 py-2 hover:bg-gray-100">Teacher List</a></li>
                            <li><a href="teacher-details.html" class="block px-3 py-2 hover:bg-gray-100">Teacher
                                    Details</a></li>
                            <li><a href="routine-teachers.html" class="block px-3 py-2 hover:bg-gray-100">Routine</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= ACADEMIC ================= -->
            <li>
                <h6 class="text-xs font-semibold uppercase text-gray-400 px-2 mb-2">
                    Academic
                </h6>
                <ul class="space-y-1">

                    <!-- Classes -->
                    <li>
                        <button @click="toggleMenu('classes')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-school-bell"></i>
                                <span>Classes</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.classes" class="ml-6 mt-1 space-y-1">
                            <li><a href="classes.html" class="block px-3 py-2 hover:bg-gray-100">All Classes</a></li>
                            <li><a href="schedule-classes.html" class="block px-3 py-2 hover:bg-gray-100">Schedule</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Class Room -->
                    <li>
                        <a href="class-room.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-building mr-2"></i> <span>Class Room</span>
                        </a>
                    </li>

                    <!-- Class Routine -->
                    <li>
                        <a href="class-routine.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-bell-school mr-2"></i> <span>Class Routine</span>
                        </a>
                    </li>

                    <!-- Section -->
                    <li>
                        <a href="class-section.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-square-rotated-forbid-2 mr-2"></i> <span>Section</span>
                        </a>
                    </li>

                    <!-- Subject -->
                    <li>
                        <a href="class-subject.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-book mr-2"></i> <span>Subject</span>
                        </a>
                    </li>

                    <!-- Syllabus -->
                    <li>
                        <a href="class-syllabus.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-book-upload mr-2"></i> <span>Syllabus</span>
                        </a>
                    </li>

                    <!-- Time Table -->
                    <li>
                        <a href="class-time-table.html"
                            class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-table mr-2"></i> <span>Time Table</span>
                        </a>
                    </li>

                    <!-- Home Work -->
                    <li>
                        <a href="class-home-work.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-license mr-2"></i> <span>Home Work</span>
                        </a>
                    </li>

                    <!-- Examinations -->
                    <li>
                        <button @click="toggleMenu('examinations')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-hexagonal-prism-plus"></i>
                                <span>Examinations</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.examinations" class="ml-6 mt-1 space-y-1">
                            <li><a href="exam.html" class="block px-3 py-2 hover:bg-gray-100">Exam</a></li>
                            <li><a href="exam-schedule.html" class="block px-3 py-2 hover:bg-gray-100">Exam Schedule</a>
                            </li>
                            <li><a href="grade.html" class="block px-3 py-2 hover:bg-gray-100">Grade</a></li>
                            <li><a href="exam-attendance.html" class="block px-3 py-2 hover:bg-gray-100">Exam
                                    Attendance</a></li>
                            <li><a href="exam-results.html" class="block px-3 py-2 hover:bg-gray-100">Exam Results</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Reasons -->
                    <li>
                        <a href="academic-reasons.html"
                            class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-lifebuoy mr-2"></i> <span>Reasons</span>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- ================= MANAGEMENT ================= -->
            <li>
                <h6 class="text-xs font-semibold uppercase text-gray-400 px-2 mb-2">
                    Management
                </h6>
                <ul class="space-y-1">

                    <!-- Fees Collection -->
                    <li>
                        <button @click="toggleMenu('fees')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-report-money"></i>
                                <span>Fees Collection</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.fees" class="ml-6 mt-1 space-y-1">
                            <li><a href="fees-group.html" class="block px-3 py-2 hover:bg-gray-100">Fees Group</a></li>
                            <li><a href="fees-type.html" class="block px-3 py-2 hover:bg-gray-100">Fees Type</a></li>
                            <li><a href="fees-master.html" class="block px-3 py-2 hover:bg-gray-100">Fees Master</a>
                            </li>
                            <li><a href="fees-assign.html" class="block px-3 py-2 hover:bg-gray-100">Fees Assign</a>
                            </li>
                            <li><a href="collect-fees.html" class="block px-3 py-2 hover:bg-gray-100">Collect Fees</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Library -->
                    <li>
                        <button @click="toggleMenu('library')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-notebook"></i>
                                <span>Library</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.library" class="ml-6 mt-1 space-y-1">
                            <li><a href="library-members.html" class="block px-3 py-2 hover:bg-gray-100">Library
                                    Members</a></li>
                            <li><a href="library-books.html" class="block px-3 py-2 hover:bg-gray-100">Books</a></li>
                            <li><a href="library-issue-book.html" class="block px-3 py-2 hover:bg-gray-100">Issue
                                    Book</a></li>
                            <li><a href="library-return.html" class="block px-3 py-2 hover:bg-gray-100">Return</a></li>
                        </ul>
                    </li>

                    <!-- Sports -->
                    <li>
                        <a href="sports.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-run mr-2"></i> <span>Sports</span>
                        </a>
                    </li>

                    <!-- Players -->
                    <li>
                        <a href="players.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-play-football mr-2"></i> <span>Players</span>
                        </a>
                    </li>

                    <!-- Hostel -->
                    <li>
                        <button @click="toggleMenu('hostel')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-building-fortress"></i>
                                <span>Hostel</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.hostel" class="ml-6 mt-1 space-y-1">
                            <li><a href="hostel-list.html" class="block px-3 py-2 hover:bg-gray-100">Hostel List</a>
                            </li>
                            <li><a href="hostel-rooms.html" class="block px-3 py-2 hover:bg-gray-100">Hostel Rooms</a>
                            </li>
                            <li><a href="hostel-room-type.html" class="block px-3 py-2 hover:bg-gray-100">Room Type</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Transport -->
                    <li>
                        <button @click="toggleMenu('transport')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-bus"></i>
                                <span>Transport</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.transport" class="ml-6 mt-1 space-y-1">
                            <li><a href="transport-routes.html" class="block px-3 py-2 hover:bg-gray-100">Routes</a>
                            </li>
                            <li><a href="transport-pickup-points.html" class="block px-3 py-2 hover:bg-gray-100">Pickup
                                    Points</a></li>
                            <li><a href="transport-vehicle-drivers.html"
                                    class="block px-3 py-2 hover:bg-gray-100">Vehicle Drivers</a></li>
                            <li><a href="transport-vehicle.html" class="block px-3 py-2 hover:bg-gray-100">Vehicle</a>
                            </li>
                            <li><a href="transport-assign-vehicle.html" class="block px-3 py-2 hover:bg-gray-100">Assign
                                    Vehicle</a></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= HRM ================= -->
            <li>
                <h6 class="text-xs font-semibold uppercase text-gray-400 px-2 mb-2">
                    HRM
                </h6>
                <ul class="space-y-1">

                    <!-- Staffs -->
                    <li>
                        <a href="staffs.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-users-group mr-2"></i> <span>Staffs</span>
                        </a>
                    </li>

                    <!-- Departments -->
                    <li>
                        <a href="departments.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-layout-distribute-horizontal mr-2"></i> <span>Departments</span>
                        </a>
                    </li>

                    <!-- Designation -->
                    <li>
                        <a href="designation.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-user-exclamation mr-2"></i> <span>Designation</span>
                        </a>
                    </li>

                    <!-- Attendance -->
                    <li>
                        <button @click="toggleMenu('attendance')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-calendar-share"></i>
                                <span>Attendance</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.attendance" class="ml-6 mt-1 space-y-1">
                            <li><a href="student-attendance.html" class="block px-3 py-2 hover:bg-gray-100">Student
                                    Attendance</a></li>
                            <li><a href="teacher-attendance.html" class="block px-3 py-2 hover:bg-gray-100">Teacher
                                    Attendance</a></li>
                            <li><a href="staff-attendance.html" class="block px-3 py-2 hover:bg-gray-100">Staff
                                    Attendance</a></li>
                        </ul>
                    </li>

                    <!-- Leaves -->
                    <li>
                        <button @click="toggleMenu('leaves')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-calendar-stats"></i>
                                <span>Leaves</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.leaves" class="ml-6 mt-1 space-y-1">
                            <li><a href="list-leaves.html" class="block px-3 py-2 hover:bg-gray-100">List of Leaves</a>
                            </li>
                            <li><a href="approve-request.html" class="block px-3 py-2 hover:bg-gray-100">Approve
                                    Request</a></li>
                        </ul>
                    </li>

                    <!-- Holidays -->
                    <li>
                        <a href="holidays.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-briefcase mr-2"></i> <span>Holidays</span>
                        </a>
                    </li>

                    <!-- Payroll -->
                    <li>
                        <a href="payroll.html" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                            <i class="ti ti-moneybag mr-2"></i> <span>Payroll</span>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- ================= FINANCE ================= -->
            <li>
                <h6 class="text-xs font-semibold uppercase text-gray-400 px-2 mb-2">
                    Finance &amp; Accounts
                </h6>
                <ul class="space-y-1">

                    <!-- Accounts -->
                    <li>
                        <button @click="toggleMenu('accounts')"
                            class="flex justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            <span class="flex items-center space-x-2">
                                <i class="ti ti-swipe"></i>
                                <span>Accounts</span>
                            </span>
                            <span>›</span>
                        </button>
                        <ul v-show="openMenus.accounts" class="ml-6 mt-1 space-y-1">
                            <li><a href="expenses.html" class="block px-3 py-2 hover:bg-gray-100">Expenses</a></li>
                            <li><a href="expenses-category.html" class="block px-3 py-2 hover:bg-gray-100">Expense
                                    Category</a></li>
                            <li><a href="accounts-income.html" class="block px-3 py-2 hover:bg-gray-100">Income</a></li>
                            <li><a href="accounts-invoices.html" class="block px-3 py-2 hover:bg-gray-100">Invoices</a>
                            </li>
                            <li><a href="invoice.html" class="block px-3 py-2 hover:bg-gray-100">Invoice View</a></li>
                            <li><a href="accounts-transactions.html"
                                    class="block px-3 py-2 hover:bg-gray-100">Transactions</a></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- ================= ANNOUNCEMENTS ================= -->
            <li>
                <h6 class="text-xs font-semibold uppercase text-gray-400 px-2 mb-2">Announcements</h6>
                <ul class="space-y-1">
                    <li><a href="notice.html" class="block px-3 py-2 hover:bg-gray-100">Notice</a></li>
                    <li><a href="news.html" class="block px-3 py-2 hover:bg-gray-100">News</a></li>
                    <li><a href="circular.html" class="block px-3 py-2 hover:bg-gray-100">Circular</a></li>
                </ul>
            </li>

            <!-- ================= FINANCE & ACCOUNTS ================= -->
            <li>
                <h6 class="menu-header text-xs font-semibold uppercase text-gray-400 px-2 mb-2">Finance &amp; Accounts
                </h6>
                <ul class="menu-group flex flex-col gap-1">

                    <!-- Accounts -->
                    <li>
                        <button @click="toggleMenu('accounts')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-swipe"></i>
                                <span>Accounts</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>

                        <ul v-show="openMenus.accounts" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li>
                                <a href="expenses.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">
                                    Expenses
                                </a>
                            </li>
                            <li>
                                <a href="expenses-category.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">
                                    Expense Category
                                </a>
                            </li>
                            <li>
                                <a href="accounts-income.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">
                                    Income
                                </a>
                            </li>
                            <li>
                                <a href="accounts-invoices.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">
                                    Invoices
                                </a>
                            </li>
                            <li>
                                <a href="invoice.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">
                                    Invoice View
                                </a>
                            </li>
                            <li>
                                <a href="accounts-transactions.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">
                                    Transactions
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </li>


            <!-- ================= USER MANAGEMENT ================= -->
            <li>
                <h6 class="menu-header text-xs font-semibold uppercase text-gray-400 px-2 mb-2">User Management</h6>
                <ul class="menu-group flex flex-col gap-1">

                    <li>
                        <a href="users.html"
                            class="submenu-item flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition">
                            <i class="ti ti-users-minus"></i>
                            <span>Users</span>
                        </a>
                    </li>

                    <li>
                        <a href="roles-permission.html"
                            class="submenu-item flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition">
                            <i class="ti ti-shield-plus"></i>
                            <span>Roles &amp; Permissions</span>
                        </a>
                    </li>

                    <li>
                        <a href="delete-account.html"
                            class="submenu-item flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition">
                            <i class="ti ti-user-question"></i>
                            <span>Delete Account Request</span>
                        </a>
                    </li>

                </ul>
            </li>


            <!-- ================= SUPPORT ================= -->
            <li>
                <h6 class="menu-header text-xs font-semibold uppercase text-gray-400 px-2 mb-2">Support</h6>
                <ul class="menu-group flex flex-col gap-1">

                    <li>
                        <a href="contact-messages.html"
                            class="submenu-item flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition">
                            <i class="ti ti-message"></i>
                            <span>Contact Messages</span>
                        </a>
                    </li>

                    <li>
                        <a href="tickets.html"
                            class="submenu-item flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition">
                            <i class="ti ti-ticket"></i>
                            <span>Tickets</span>
                        </a>
                    </li>

                </ul>
            </li>


            <!-- ================= SETTINGS ================= -->
            <li>
                <h6 class="menu-header text-xs font-semibold uppercase text-gray-400 px-2 mb-2">Settings</h6>
                <ul class="menu-group flex flex-col gap-1">

                    <!-- General Settings -->
                    <li>
                        <button @click="toggleMenu('generalSettings')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-shield-cog"></i>
                                <span>General Settings</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>
                        <ul v-show="openMenus.generalSettings" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li><a href="profile-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Profile
                                    Settings</a></li>
                            <li><a href="security-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Security
                                    Settings</a></li>
                            <li><a href="notifications-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Notifications
                                    Settings</a></li>
                            <li><a href="connected-apps.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Connected
                                    Apps</a></li>
                        </ul>
                    </li>

                    <!-- Website Settings -->
                    <li>
                        <button @click="toggleMenu('websiteSettings')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-device-laptop"></i>
                                <span>Website Settings</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>
                        <ul v-show="openMenus.websiteSettings" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li><a href="company-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Company
                                    Settings</a></li>
                            <li><a href="localization.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Localization</a>
                            </li>
                            <li><a href="prefixes.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Prefixes</a>
                            </li>
                            <li><a href="preferences.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Preferences</a>
                            </li>
                            <li><a href="social-authentication.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Social
                                    Authentication</a></li>
                            <li><a href="language.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Language</a>
                            </li>
                        </ul>
                    </li>

                    <!-- App Settings -->
                    <li>
                        <button @click="toggleMenu('appSettings')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-apps"></i>
                                <span>App Settings</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>
                        <ul v-show="openMenus.appSettings" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li><a href="invoice-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Invoice
                                    Settings</a></li>
                            <li><a href="custom-fields.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Custom
                                    Fields</a></li>
                        </ul>
                    </li>

                    <!-- System Settings -->
                    <li>
                        <button @click="toggleMenu('systemSettings')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-file-symlink"></i>
                                <span>System Settings</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>
                        <ul v-show="openMenus.systemSettings" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li><a href="email-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Email
                                    Settings</a></li>
                            <li><a href="email-templates.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Email
                                    Templates</a></li>
                            <li><a href="sms-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">SMS
                                    Settings</a></li>
                            <li><a href="otp-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">OTP</a>
                            </li>
                            <li><a href="gdpr-cookies.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">GDPR
                                    Cookies</a></li>
                        </ul>
                    </li>

                    <!-- Financial Settings -->
                    <li>
                        <button @click="toggleMenu('financialSettings')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-zoom-money"></i>
                                <span>Financial Settings</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>
                        <ul v-show="openMenus.financialSettings" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li><a href="payment-gateways.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Payment
                                    Gateways</a></li>
                            <li><a href="tax-rates.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Tax
                                    Rates</a></li>
                        </ul>
                    </li>

                    <!-- Academic Settings -->
                    <li>
                        <button @click="toggleMenu('academicSettings')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-calendar-repeat"></i>
                                <span>Academic Settings</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>
                        <ul v-show="openMenus.academicSettings" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li><a href="school-settings.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">School
                                    Settings</a></li>
                            <li><a href="religion.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Religion</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Other Settings -->
                    <li>
                        <button @click="toggleMenu('otherSettings')"
                            class="menu-button flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition">
                            <span class="menu-button-content flex items-center gap-2">
                                <i class="ti ti-flag-cog"></i>
                                <span>Other Settings</span>
                            </span>
                            <span class="menu-arrow">›</span>
                        </button>
                        <ul v-show="openMenus.otherSettings" class="submenu ml-6 mt-1 flex flex-col gap-1">
                            <li><a href="storage.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Storage</a>
                            </li>
                            <li><a href="ban-ip-address.html"
                                    class="submenu-item block px-3 py-2 rounded hover:bg-gray-100 transition">Ban IP
                                    Address</a></li>
                        </ul>
                    </li>

                </ul>
            </li>

        </ul>
    </aside>
</template>


<style scoped></style>